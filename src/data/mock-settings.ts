export interface UserProfile {
  email: string;
  fullName: string;
  title: string;
  phone: string;
  language: string;
  timezone: string;
}

export const currentUser: UserProfile = {
  email: "justin@sentra.app",
  fullName: "Justin Cheng",
  title: "Head of Strategy & Operations",
  phone: "+1 647-401-3399",
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
    name: "Ashwin Gopinath",
    email: "ashwin@sentra.app",
    role: "Admin",
    initials: "AG",
    avatarColor: "#3A4D54",
  },
  {
    id: "wm-2",
    name: "Andrey Starenky",
    email: "andrey@sentra.app",
    role: "Admin",
    initials: "AS",
    avatarColor: "#5E6AD2",
  },
  {
    id: "wm-3",
    name: "Justin Cheng",
    email: "justin@sentra.app",
    role: "Admin",
    initials: "JC",
    avatarColor: "#3A4D54",
  },
  {
    id: "wm-4",
    name: "Kristina Beaman",
    email: "kristina@sentra.app",
    role: "Member",
    initials: "KB",
    avatarColor: "#E91E8C",
  },
  {
    id: "wm-5",
    name: "Shaurya Patel",
    email: "shaurya@sentra.app",
    role: "Member",
    initials: "SP",
    avatarColor: "#EA4335",
  },
];
