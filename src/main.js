import './style.css'

const getPreferredTheme = () => {
  const stored = localStorage.getItem('theme')
  if (stored === 'light' || stored === 'dark') return stored
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

const setTheme = (theme) => {
  document.documentElement.setAttribute('data-theme', theme)
  localStorage.setItem('theme', theme)
  updateThemeToggle(theme)
}

const updateThemeToggle = (theme) => {
  const button = document.querySelector('[data-theme-toggle]')
  const sunIcon = document.querySelector('[data-icon-sun]')
  const moonIcon = document.querySelector('[data-icon-moon]')

  if (!button || !sunIcon || !moonIcon) return

  button.setAttribute(
    'aria-label',
    theme === 'dark' ? 'Zu hellem Modus wechseln' : 'Zu dunklem Modus wechseln'
  )

  if (theme === 'dark') {
    sunIcon.classList.remove('hidden')
    moonIcon.classList.add('hidden')
  } else {
    sunIcon.classList.add('hidden')
    moonIcon.classList.remove('hidden')
  }
}

const initialTheme = getPreferredTheme()
document.documentElement.setAttribute('data-theme', initialTheme)

document.querySelector('#app').innerHTML = `
  <div class="min-h-screen bg-stone-50 text-stone-900 transition-colors dark:bg-[#11100f] dark:text-stone-100">
    <header class="sticky top-0 z-50 border-b border-stone-200/80 bg-stone-50/90 backdrop-blur dark:border-stone-800 dark:bg-[#11100f]/85">
      <div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="/" class="text-lg font-semibold tracking-tight transition hover:text-teal-700 dark:hover:text-teal-300">
          cracky.dev
        </a>

        <div class="flex items-center gap-2 sm:gap-3">
          <a
            href="#services"
            class="hidden rounded-lg px-3 py-2 text-sm font-medium text-stone-600 transition hover:bg-stone-100 hover:text-stone-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 dark:text-stone-300 dark:hover:bg-stone-900 dark:hover:text-white sm:inline-flex"
          >
            Services
          </a>

          <a
            href="#about"
            class="hidden rounded-lg px-3 py-2 text-sm font-medium text-stone-600 transition hover:bg-stone-100 hover:text-stone-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 dark:text-stone-300 dark:hover:bg-stone-900 dark:hover:text-white sm:inline-flex"
          >
            Über
          </a>

          <button
            type="button"
            data-theme-toggle
            class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-stone-300 bg-white text-stone-700 shadow-sm transition hover:scale-[1.03] hover:bg-stone-100 hover:text-stone-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-200 dark:hover:bg-stone-800 dark:hover:text-white"
          >
            <svg data-icon-sun class="h-5 w-5 hidden" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
              <circle cx="12" cy="12" r="4"></circle>
              <path d="M12 2v2.5M12 19.5V22M4.93 4.93l1.77 1.77M17.3 17.3l1.77 1.77M2 12h2.5M19.5 12H22M4.93 19.07l1.77-1.77M17.3 6.7l1.77-1.77"></path>
            </svg>

            <svg data-icon-moon class="h-5 w-5 hidden" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
              <path d="M21 12.8A9 9 0 1 1 11.2 3a7.2 7.2 0 0 0 9.8 9.8Z"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>

    <main>
      <section class="mx-auto max-w-6xl px-6 py-24 sm:py-28 lg:py-32">
        <div class="grid gap-14 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-end">
          <div class="max-w-3xl">
            <p class="mb-5 text-sm font-medium uppercase tracking-[0.22em] text-stone-500 dark:text-stone-400">
              Managed Hosting · Persönlich · Fair
            </p>

            <h1 class="text-5xl font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">
              Hosting, das persönlich bleibt.
            </h1>

            <p class="mt-6 max-w-2xl text-lg leading-8 text-stone-600 dark:text-stone-300 sm:text-xl sm:leading-9">
              cracky.dev ist aktuell ein Platzhalter für eine moderne, persönliche Hosting-Marke:
              technisch sauber, nahbar und ohne Konzern-Vibe.
            </p>

            <div class="mt-10 flex flex-wrap gap-4">
              <a
                href="#services"
                class="inline-flex rounded-xl bg-stone-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-stone-700 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-white"
              >
                Services ansehen
              </a>

              <a
                href="#about"
                class="inline-flex rounded-xl border border-stone-300 px-5 py-3 text-sm font-medium text-stone-800 transition hover:-translate-y-0.5 hover:bg-stone-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 dark:border-stone-700 dark:text-stone-100 dark:hover:bg-stone-900"
              >
                Mehr erfahren
              </a>
            </div>
          </div>

          <aside class="rounded-3xl border border-stone-200 bg-white/80 p-6 shadow-sm backdrop-blur transition dark:border-stone-800 dark:bg-stone-900/80">
            <p class="text-sm uppercase tracking-[0.18em] text-stone-500 dark:text-stone-400">
              Erste Richtung
            </p>

            <div class="mt-6 space-y-4">
              <div class="rounded-2xl bg-stone-100 px-4 py-3 transition dark:bg-stone-800/70">
                <div class="text-sm font-medium">Kleine Services</div>
                <div class="mt-1 text-sm text-stone-600 dark:text-stone-300">statt überladener Pakete</div>
              </div>

              <div class="rounded-2xl bg-stone-100 px-4 py-3 transition dark:bg-stone-800/70">
                <div class="text-sm font-medium">Direkter Kontakt</div>
                <div class="mt-1 text-sm text-stone-600 dark:text-stone-300">ohne Ticket-Hölle</div>
              </div>

              <div class="rounded-2xl bg-stone-100 px-4 py-3 transition dark:bg-stone-800/70">
                <div class="text-sm font-medium">Schrittweise aufgebaut</div>
                <div class="mt-1 text-sm text-stone-600 dark:text-stone-300">ehrlich statt aufgeblasen</div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section class="border-y border-stone-200/80 bg-white/50 dark:border-stone-800 dark:bg-stone-900/30">
        <div class="mx-auto grid max-w-6xl gap-4 px-6 py-5 text-sm text-stone-600 dark:text-stone-300 sm:grid-cols-3">
          <p>Persönlich betreut statt anonymer Plattform.</p>
          <p>Modernes Setup mit Fokus auf kleine Services.</p>
          <p>Fairer, ruhiger und technisch sauberer Ansatz.</p>
        </div>
      </section>

      <section id="services" class="mx-auto max-w-6xl px-6 py-24">
        <div class="max-w-2xl">
          <p class="text-sm uppercase tracking-[0.18em] text-stone-500 dark:text-stone-400">Services</p>
          <h2 class="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Kleine Produkte, sauber betreut.
          </h2>
          <p class="mt-4 text-base leading-7 text-stone-600 dark:text-stone-300">
            Statt alles auf einmal anzubieten, soll das Projekt Schritt für Schritt mit wenigen,
            gut betreuten Services wachsen.
          </p>
        </div>

        <div class="mt-12 grid gap-6 md:grid-cols-3">
          <article class="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-teal-500/40 hover:shadow-md dark:border-stone-800 dark:bg-stone-900 dark:hover:border-teal-400/40">
            <div class="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500/10 text-teal-700 dark:text-teal-300">
              01
            </div>
            <h3 class="text-lg font-semibold">Managed Services</h3>
            <p class="mt-3 text-sm leading-6 text-stone-600 dark:text-stone-300">
              Kleine, betreute Dienste statt anonymer Massenhosting-Pakete.
            </p>
          </article>

          <article class="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-teal-500/40 hover:shadow-md dark:border-stone-800 dark:bg-stone-900 dark:hover:border-teal-400/40">
            <div class="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500/10 text-teal-700 dark:text-teal-300">
              02
            </div>
            <h3 class="text-lg font-semibold">Persönlicher Support</h3>
            <p class="mt-3 text-sm leading-6 text-stone-600 dark:text-stone-300">
              Direkter Kontakt, kurze Wege und ein klarer, ruhiger Support-Stil.
            </p>
          </article>

          <article class="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-teal-500/40 hover:shadow-md dark:border-stone-800 dark:bg-stone-900 dark:hover:border-teal-400/40">
            <div class="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500/10 text-teal-700 dark:text-teal-300">
              03
            </div>
            <h3 class="text-lg font-semibold">Ehrlicher Ausbau</h3>
            <p class="mt-3 text-sm leading-6 text-stone-600 dark:text-stone-300">
              Erst testen, dann sauber erweitern — ohne künstlich aufgeblasenes Versprechen.
            </p>
          </article>
        </div>
      </section>

      <section class="mx-auto max-w-6xl px-6 pb-24">
        <div class="rounded-3xl border border-teal-500/20 bg-teal-500/5 p-8 shadow-sm dark:border-teal-400/20 dark:bg-teal-400/10 sm:p-10">
          <div class="grid gap-8 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-center">
            <div>
              <p class="text-sm uppercase tracking-[0.18em] text-teal-700 dark:text-teal-300">
                Noch im Aufbau
              </p>
              <h2 class="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Erst testen, dann sauber wachsen.
              </h2>
              <p class="mt-4 max-w-2xl text-base leading-7 text-stone-600 dark:text-stone-300">
                Die Marke entsteht gerade Schritt für Schritt. Ziel ist ein ruhiger, fairer Einstieg
                mit wenigen Services, die später sauber erweitert werden können.
              </p>
            </div>

            <div class="flex flex-col gap-3">
              <a
                href="#about"
                class="inline-flex items-center justify-center rounded-xl bg-stone-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-stone-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-white"
              >
                Mehr zur Idee
              </a>
              <a
                href="mailto:hello@cracky.dev"
                class="inline-flex items-center justify-center rounded-xl border border-stone-300 px-5 py-3 text-sm font-medium text-stone-800 transition hover:-translate-y-0.5 hover:bg-stone-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 dark:border-stone-700 dark:text-stone-100 dark:hover:bg-stone-900"
              >
                Interesse halten
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" class="mx-auto max-w-6xl px-6 pb-24">
        <div class="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
          <div class="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm dark:border-stone-800 dark:bg-stone-900">
            <p class="text-sm uppercase tracking-[0.18em] text-stone-500 dark:text-stone-400">Warum das Ganze?</p>
            <h2 class="mt-4 text-3xl font-semibold tracking-tight">Weniger Konzern-Vibe, mehr echtes Gegenüber.</h2>
            <p class="mt-4 max-w-3xl text-lg leading-8 text-stone-600 dark:text-stone-300">
              Die Idee dahinter ist einfach: lieber wenige Services gut betreuen, statt auf dem Papier
              riesig zu wirken und in der Praxis unnahbar zu sein.
            </p>
          </div>

          <div class="rounded-3xl border border-stone-200 bg-stone-100 p-8 shadow-sm dark:border-stone-800 dark:bg-stone-900">
            <p class="text-sm uppercase tracking-[0.18em] text-stone-500 dark:text-stone-400">Kontakt später</p>
            <p class="mt-4 text-base leading-7 text-stone-600 dark:text-stone-300">
              Hier könnte Kontakt, Anfrageformular oder später ein Kunden-Login
              ergänzt werden.
            </p>
          </div>
        </div>
      </section>
      
    </main>

    <footer class="border-t border-stone-200/80 dark:border-stone-800">
      <div class="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-stone-500 dark:text-stone-400 sm:flex-row sm:items-center sm:justify-between">
        <p>cracky.dev · Platzhalter für eine spätere Hosting-Marke</p>
        <p>
          Entstanden aus
          <a
            href="https://crackscout.eu/"
            class="underline transition hover:no-underline hover:text-teal-700 dark:hover:text-teal-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            crackscout.eu
          </a>
        </p>
      </div>
    </footer>
  </div>
`

updateThemeToggle(initialTheme)

document.querySelector('[data-theme-toggle]')?.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme')
  setTheme(current === 'dark' ? 'light' : 'dark')
})
