export default function Footer() {
  return (
    <footer className="text-center text-sm py-6 border-t border-gray-600 dark:border-gray-300">
      <p className="text-gray-400 dark:text-gray-500">
        &copy; {new Date().getFullYear()} Jerome Amahoy. All rights reserved.
      </p>
    </footer>
  );
}
