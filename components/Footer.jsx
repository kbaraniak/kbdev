import { useLanguage } from "../contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer 
      className="mt-20 py-6 text-center rounded-t-lg"
      style={{
        background: 'rgba(255, 255, 255, 0.05)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)'
      }}
    >
      <p className="text-gray-300 text-base">
        &copy; 2025 - {currentYear} {t.footer.copyright}
      </p>
    </footer>
  );
}
