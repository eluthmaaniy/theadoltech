import { Link } from "@tanstack/react-router";
import coverImg from "@/assets/adoltech-cover.jpg";
import { ProfileSidebar } from "./profile-sidebar";
import { ProfileTabs } from "./profile-tabs";

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-sans">
      {/* Cover image */}
      <div className="w-full h-48 md:h-64 bg-secondary overflow-hidden">
        <img
          src={coverImg}
          alt="Adoltech cover"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Main grid */}
      <div className="container max-w-6xl mx-auto px-4 md:px-6 md:grid md:grid-cols-12 md:gap-8 relative md:mt-8 flex-1">
        <ProfileSidebar />

        <div className="md:col-span-9 mt-4 md:mt-0">
          <ProfileTabs />
          <div className="mt-8">{children}</div>
        </div>
      </div>

      {/* Mobile contact button */}
      <div className="container max-w-6xl mx-auto px-4 mt-8 md:hidden">
        <Link
          to="/contact"
          className="bg-primary text-primary-foreground px-6 py-3 rounded-full flex items-center justify-center shadow-md hover:opacity-90 transition-opacity font-medium"
        >
          <i className="ri-send-plane-fill mr-2" aria-hidden /> Contact me
        </Link>
        <p className="text-center text-muted-foreground text-sm mt-2">
          Average response time: 1 hour
        </p>
      </div>

      {/* Footer */}
      <footer className="mt-12 bg-primary text-primary-foreground py-8">
        <div className="container max-w-6xl mx-auto px-4 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Adebisi Olamide · Adoltech. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
