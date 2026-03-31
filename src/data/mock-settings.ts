export interface UserProfile {
  email: string;
  fullName: string;
  title: string;
  phone: string;
  language: string;
  timezone: string;
}

export const currentUser: UserProfile = {
  email: "mark.davis@jpmorgan.com",
  fullName: "Mark Davis",
  title: "Managing Director, Investment Banking",
  phone: "+1 212-555-0147",
  language: "English",
  timezone: "America/New_York (EST)",
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
    name: "Mark Davis",
    email: "mark.davis@jpmorgan.com",
    role: "Admin",
    initials: "TK",
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
