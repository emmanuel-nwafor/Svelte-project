import Hero from "./pages/Hero.svelte";
import About from "./pages/About.svelte";
import Contact from "./pages/Contact.svelte";
import NotFound from "./pages/NotFound.svelte";

export default {
    '/': Hero,
    '/about': About,
    '/contact': Contact,
    '*': NotFound
}