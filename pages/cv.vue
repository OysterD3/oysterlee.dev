<template>
  <div>
    <a
      href="/Oyster%20-%20CV.pdf"
      download="Oyster - CV.pdf"
      class="rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 hover:bg-indigo-500 bg-indigo-600 focus-visible:outline-indigo-600 dark:(hover:bg-indigo-400 focus-visible:outline-indigo-500 bg-indigo-500)"
    >
      Download CV
    </a>
    <div id="cv">
      <div class="p-4 print:p-0">
        <header
          class="flex justify-between items-baseline border-b-2 border-opacity-50 border-gray-400 pb-5 mb-5"
        >
          <h1 class="text-indigo-600 text-6xl print:text-6xl">
            &lt;&gt;<span class="font-bold">Oyster Lee</span>&lt;&sol;&gt;
          </h1>

          <div class="flex items-center text-2xl print:text-xl space-x-2">
            <div class="i-ri:code-box-fill"></div>
            <a href="https://oysterlee.dev">https://oysterlee.dev</a>
          </div>
        </header>
        <section class="mb-5">
          <h2 class="text-2xl mb-2 font-bold">Skills</h2>
          <div class="flex gap-2">
            <CVSkillTags />
          </div>
        </section>
        <section>
          <h2 class="text-2xl mb-2 font-bold">Work Experiences</h2>
          <ul class="space-y-8">
            <CVWorkExperienceItem
              v-for="(item, idx) in EXPERIENCES"
              :key="idx"
              :company-logo="item.companyLogo"
              :company="item.company"
              :designation="item.designation"
              :from-date="item.fromDate"
              :to-date="item.toDate"
              :descriptions="item.descriptions"
            />
          </ul>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'CV | Oyster Lee',
});

const EXPERIENCES = [
  {
    companyLogo: '/experiences/sleekflow.jpeg',
    company: 'SleekFlow',
    designation: 'Frontend Engineer',
    fromDate: 'Nov 2022',
    toDate: 'Present',
    descriptions: [
      'Assist in Flow Builder & Inbox module',
      'Fully handle Broadcast frontend module revamp',
      'Optimise bundling',
    ],
  },
  {
    companyLogo: '/experiences/wetix.jpeg',
    company: 'WeTix',
    designation: 'Full Stack Web Developer (Part-time)',
    fromDate: 'Mar 2022',
    toDate: 'Present',
    descriptions: ['Maintain and fixing bugs'],
  },
  {
    companyLogo: '/experiences/easystore.jpeg',
    company: 'EasyStore',
    designation: 'Senior Frontend Developer',
    fromDate: 'Jan 2022',
    toDate: 'Nov 2022',
    descriptions: [
      'Rewriting admin portal into TypeScript',
      'Improved DX for the Frontend team',
      'Develop several reusable components',
      'Optimise bundling',
    ],
  },
  {
    companyLogo: '/experiences/wetix.jpeg',
    company: 'WeTix',
    designation: 'Frontend Developer',
    fromDate: 'Jul 2020',
    toDate: 'Jan 2022',
    descriptions: [
      'Develop POS for sport booking',
      'Develop a few admin portals for internal and external use',
      "Aggregate various service provider's API (Mobile Reload / Bill Payment",
      "Develop a very lightweight of web app to be portable into mobile app's WebView",
      'Micro-services with gRPC',
    ],
  },
  {
    companyLogo: '/experiences/vtapau.jpeg',
    company: 'VTapau',
    designation: 'Full Stack Web Developer',
    fromDate: 'Mar 2020',
    toDate: 'Jul 2020',
    descriptions: [
      "Founded by Victoria Home's original team during MCO",
      'Involving business development, product, tech and brainstorming',
      'Complete MVP within 3 days',
      'Featured by several mainstream medias',
    ],
  },
  {
    companyLogo: '/experiences/vh.jpeg',
    company: 'Victoria Home',
    designation: 'Full Stack Web Developer',
    fromDate: 'Aug 2018',
    toDate: 'Jun 2020',
    descriptions: [
      'Worked in the Tech team alone',
      'Provided effective troubleshooting and remediation for web applications.',
      'Remained dedicated to emerging technology and the latest digital marketing concepts.',
      'Effectively multitasked and worked well with internal teams.',
      'Justify business requirement and come out proper solution',
    ],
  },
  {
    companyLogo: '/experiences/vh.jpeg',
    company: 'Victoria Home',
    designation: 'IT Intern',
    fromDate: 'May 2018',
    toDate: 'Jul 2018',
    descriptions: [
      'Finished given task before the deadline',
      'Managed to deliver 3 MVP from scratch within 3 months',
    ],
  },
] as const;

const printCV = () => {
  const prtHtml = document.getElementById('cv')?.innerHTML || null;

  if (!prtHtml) return;
  let stylesHtml = '';
  for (const node of [
    ...document.querySelectorAll('link[rel="stylesheet"], style'),
  ]) {
    stylesHtml += node.outerHTML;
  }

  const WinPrint = window.open(
    '',
    '',
    'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0',
  );

  if (!WinPrint) return;

  WinPrint.document.write(`<!DOCTYPE html>
  <html>
    <head>
      ${stylesHtml}
    </head>
    <body>
      ${prtHtml}
    </body>
  </html>`);

  WinPrint.document.close();
  WinPrint.focus();
  WinPrint.print();
};
</script>
