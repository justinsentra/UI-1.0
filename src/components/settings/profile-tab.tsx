import { useState, useRef, useEffect } from "react";
import { currentUser, type UserProfile } from "@/data/mock-settings";

type EditableField = Exclude<keyof UserProfile, "email">;

const fieldConfig: { key: keyof UserProfile; label: string }[] = [
  { key: "email", label: "Email" },
  { key: "fullName", label: "Full name" },
  { key: "title", label: "Title" },
  { key: "phone", label: "Phone number" },
  { key: "language", label: "Language" },
  { key: "timezone", label: "Timezone" },
];

export function ProfileTab() {
  const [profile, setProfile] = useState<UserProfile>({ ...currentUser });
  const [editingField, setEditingField] = useState<EditableField | null>(null);
  const [editValue, setEditValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const [passwords, setPasswords] = useState({
    current: "",
    new: "",
    confirm: "",
  });

  useEffect(() => {
    if (editingField && inputRef.current) {
      inputRef.current.focus();
    }
  }, [editingField]);

  const startEditing = (field: EditableField) => {
    setEditingField(field);
    setEditValue(profile[field]);
  };

  const saveField = () => {
    if (editingField) {
      setProfile((prev) => ({ ...prev, [editingField]: editValue }));
      setEditingField(null);
    }
  };

  const cancelEditing = () => {
    setEditingField(null);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      saveField();
    } else if (e.key === "Escape") {
      cancelEditing();
    }
  };

  return (
    <div>
      {/* Profile Fields */}
      <section className="mb-10">
        <div className="space-y-0">
          {fieldConfig.map(({ key, label }) => {
            const isEmail = key === "email";
            const isEditing = editingField === key;

            return (
              <div key={key} className="group flex items-center py-3">
                <span className="w-36 text-sm text-[var(--fg-muted)] shrink-0">
                  {label}
                </span>
                <div className="flex-1 min-w-0">
                  {isEditing ? (
                    <input
                      ref={inputRef}
                      type="text"
                      value={editValue}
                      onChange={(e) => setEditValue(e.target.value)}
                      onBlur={saveField}
                      onKeyDown={handleKeyDown}
                      className="w-full h-8 px-2 -ml-2 rounded-md border border-[var(--border-base)] bg-[var(--bg-base)] text-sm text-[var(--fg-base)] focus:border-[var(--fg-disabled)] outline-none transition-colors"
                    />
                  ) : isEmail ? (
                    <span className="text-sm text-[var(--fg-disabled)]">
                      {profile[key]}
                    </span>
                  ) : (
                    <span
                      onClick={() => startEditing(key as EditableField)}
                      className="text-sm text-[var(--fg-base)] cursor-text px-2 -ml-2 py-1 rounded-md hover:bg-[var(--bg-component-hover)] transition-colors inline-block"
                    >
                      {profile[key]}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <div className="border-t border-[var(--border-base)] mb-10" />

      {/* Change Password Section */}
      <section>
        <h2 className="text-md font-semibold text-[var(--fg-base)] mb-0.5">
          Change password
        </h2>
        <p className="text-sm text-[var(--fg-muted)] mb-5 max-w-[420px]">
          Update your password to keep your account secure.
        </p>
        <div className="space-y-4 max-w-[340px]">
          <div>
            <p className="text-sm font-medium text-[var(--fg-base)] mb-0.5">
              Current password
            </p>
            <p className="text-xs text-[var(--fg-disabled)] mb-2">
              Enter your existing password
            </p>
            <input
              type="password"
              value={passwords.current}
              onChange={(e) =>
                setPasswords((prev) => ({ ...prev, current: e.target.value }))
              }
              className="w-full h-9 px-3 rounded-lg border border-[var(--border-base)] bg-[var(--bg-base)] text-sm text-[var(--fg-base)] placeholder:text-[var(--fg-disabled)] focus:border-[var(--fg-disabled)] outline-none transition-colors"
              placeholder="Enter current password"
            />
          </div>
          <div>
            <p className="text-sm font-medium text-[var(--fg-base)] mb-0.5">
              New password
            </p>
            <p className="text-xs text-[var(--fg-disabled)] mb-2">
              Must be at least 8 characters
            </p>
            <input
              type="password"
              value={passwords.new}
              onChange={(e) =>
                setPasswords((prev) => ({ ...prev, new: e.target.value }))
              }
              className="w-full h-9 px-3 rounded-lg border border-[var(--border-base)] bg-[var(--bg-base)] text-sm text-[var(--fg-base)] placeholder:text-[var(--fg-disabled)] focus:border-[var(--fg-disabled)] outline-none transition-colors"
              placeholder="Enter new password"
            />
          </div>
          <div>
            <p className="text-sm font-medium text-[var(--fg-base)] mb-0.5">
              Confirm new password
            </p>
            <p className="text-xs text-[var(--fg-disabled)] mb-2">
              Re-enter your new password
            </p>
            <input
              type="password"
              value={passwords.confirm}
              onChange={(e) =>
                setPasswords((prev) => ({ ...prev, confirm: e.target.value }))
              }
              className="w-full h-9 px-3 rounded-lg border border-[var(--border-base)] bg-[var(--bg-base)] text-sm text-[var(--fg-base)] placeholder:text-[var(--fg-disabled)] focus:border-[var(--fg-disabled)] outline-none transition-colors"
              placeholder="Confirm new password"
            />
          </div>
          <div className="flex justify-end pt-2">
            <button
              type="button"
              className="h-9 px-4 rounded-lg bg-[var(--fg-base)] text-[var(--bg-base)] text-sm font-medium hover:opacity-90 transition-opacity active:scale-[0.98] cursor-pointer"
            >
              Confirm
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
