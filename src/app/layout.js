 import "./globals.css";
 import Navbar from "@/components/Navbar";
import Footer from "../components/Footer";
import {FitLogProvider} from "../components/FitLogProvider";

export const metadata = {
  title: "FitLog - Workout Library",
  description: "Track your workouts with FitLog",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#0b0b0b] text-white">
        <FitLogProvider>
          <Navbar /> 
           
           <main>
            {children}
           </main>
               

          <Footer />
        </FitLogProvider>
      </body>
    </html>
  );
}
