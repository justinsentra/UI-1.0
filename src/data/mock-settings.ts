export interface UserProfile {
  email: string;
  fullName: string;
  title: string;
  phone: string;
  language: string;
  timezone: string;
}

export const currentUser: UserProfile = {
  email: "leo@sentra.app",
  fullName: "Leo Hartwell",
  title: "Head of Strategy & Operations",
  phone: "+1 555-867-5309",
  language: "English",
  timezone: "America/Toronto (EST)",
};

export interface WorkspaceMember {
  id: string;
  name: string;
  email: string;
  role: "Admin" | "Member" | "Viewer";
  initials: string;
  avatarColor: string;
}

export const workspaceMembers: WorkspaceMember[] = [
  {
    id: "wm-1",
    name: "Raj Sundaram",
    email: "raj@sentra.app",
    role: "Admin",
    initials: "RS",
    avatarColor: "#3A4D54",
  },
  {
    id: "wm-2",
    name: "Pavel Volkov",
    email: "pavel@sentra.app",
    role: "Admin",
    initials: "PV",
    avatarColor: "#5E6AD2",
  },
  {
    id: "wm-3",
    name: "Leo Hartwell",
    email: "leo@sentra.app",
    role: "Admin",
    initials: "LH",
    avatarColor: "#3A4D54",
  },
  {
    id: "wm-4",
    name: "Ingrid Solberg",
    email: "ingrid@sentra.app",
    role: "Member",
    initials: "IS",
    avatarColor: "#E91E8C",
  },
  {
    id: "wm-5",
    name: "Arjun Reddy",
    email: "arjun@sentra.app",
    role: "Member",
    initials: "AR",
    avatarColor: "#EA4335",
  },
];
