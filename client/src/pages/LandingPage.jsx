import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
// import axios from 'axios';
import dayjs from 'dayjs';
import { Link } from 'react-router';

import { FcGoogle } from 'react-icons/fc';
import { FaWhatsapp, FaWaze, FaMapMarkedAlt } from 'react-icons/fa';
import { CiLocationOn } from 'react-icons/ci';

import DepanKlinik from '../assets/depanprimo.png';
import Adib from '../assets/dradib.png';
const LogoPrimo = '/logoprimo.png';

function AboutSection() {
  return (
    <motion.section
      className=' bg-[#ffffff]'
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <div className='mx-auto flex max-w-5xl flex-col gap-8 px-4 py-8 md:py-10 motion-safe:animate-fade-up'>
        <div className='md:w-1/3'>
          <h2 className='text-xl font-semibold text-[#2d2d2d] sm:text-2xl'>
            About Us
          </h2>
          <p className='mt-2 text-[13px] text-[#2d2d2d]/70 sm:text-base'>
            Get to know Klinik Pergigian Primodental
          </p>
        </div>
        <div className='space-y-3 text-[13px] leading-relaxed text-[#2d2d2d]/80 sm:text-base'>
          <p>
            Primodental was established on 1st of March 2025. The establishment
            of this clinic is driven to deliver comprehensive dental services to
            public and private clients.
          </p>
          <p>
            We provide high-quality and patient-friendly dental treatment
            services to the local community. Equipped with modern facilities,
            this clinic is committed to offer evidence-based treatment, using
            the latest technology and an approach that focuses on the comfort
            and individual needs of patients.
          </p>
          <p>
            In accordance to the campaign of Ministry of Health Malaysia (KKM),
            we believe that a healthy smile is the key to self-confidence and a
            better quality of life. Thus, Primodental is presented as a trusted
            and easily accessible oral healthcare partner for all levels of
            society.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-full h-full'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3971.306961054124!2d100.4279782!3d5.5213882!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304adb2ed9909595%3A0xdad6bbee44b48e2f!2sKlinik%20Pergigian%20Primodental%2C%20Kepala%20Batas%2C%20Pulau%20Pinang%20(Best%20Dental%20Clinic%20in%20Penang)!5e0!3m2!1sen!2smy!4v1764798854281!5m2!1sen!2smy'
            // width='600'
            // height='450'
            className='rounded-2xl w-full h-full'
          ></iframe>
          <img src={DepanKlinik} className='rounded-2xl w-full h-full' />
        </div>
      </div>
    </motion.section>
  );
}

function VisionMissionSection() {
  return (
    <motion.section
      className='bg-[linear-gradient(to_right,#fde68a_0%,#fde68a_50%,#ffffff_50%,#ffffff_100%)]'
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <div className='mx-auto max-w-5xl px-4 py-8 md:py-10 motion-safe:animate-fade-up motion-safe:animation-delay-100 bg-[#fde68a] rounded-2xl'>
        <div className='flex flex-col gap-6 md:flex-row'>
          <div className='md:w-1/3'>
            <h2 className='text-xl font-semibold text-[#2d2d2d] sm:text-2xl'>
              Vision &amp; Mission
            </h2>
            <p className='mt-2 text-[13px] text-[#2d2d2d]/70 sm:text-base'>
              Clear direction for patient care.
            </p>
          </div>
          <div className='space-y-4 text-[13px] leading-relaxed text-[#2d2d2d]/80 sm:text-base'>
            <div>
              <h3 className='text-sm font-semibold text-[#2d2d2d] sm:text-base'>
                Vision
              </h3>
              <p className='mt-1'>
                To be a trusted and leading dental healthcare provider in the
                region, creating confident smiles through modern dentistry.
              </p>
            </div>
            <div>
              <h3 className='text-sm font-semibold text-[#2d2d2d] sm:text-base'>
                Mission
              </h3>
              <ul className='mt-1 list-disc space-y-1 pl-4'>
                <li>
                  To deliver comprehensive dental services tailored to the needs
                  of our patients.
                </li>
                <li>
                  To maintain the highest standards of clinical practice using
                  evidence-based dentistry.
                </li>
                <li>
                  To provide affordable treatments without compromising on
                  quality.
                </li>
                <li>
                  To promote oral health awareness and preventive care within
                  the community.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

function CoreValuesSection() {
  return (
    <motion.section
      className='bg-[linear-gradient(to_right,#ffffff_0%,#ffffff_50%,#0051BA_50%,#0051BA_100%)]'
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <div className='mx-auto max-w-5xl px-8 py-8 md:py-10 motion-safe:animate-fade-up motion-safe:animation-delay-150 bg-[#0051BA] rounded-4xl'>
        <div className='flex flex-col gap-6 md:items-start'>
          <div className='md:w-1/3'>
            <h2 className='text-xl font-semibold text-white sm:text-2xl'>
              Our Core Values
            </h2>
            <p className='mt-2 text-[13px] text-white/70 sm:text-base'>
              The foundation of exceptional dental care.
            </p>
          </div>
          <div className='grid flex-1 grid-cols-1 gap-4 text-[13px] sm:grid-cols-2 sm:text-base'>
            <div className='rounded-2xl bg-[#ffffff] p-4 shadow-sm ring-1 ring-[#2d2d2d]/5'>
              <h3 className='text-sm font-semibold text-[#2d2d2d] sm:text-base'>
                Clinical Integrity
              </h3>
              <p className='mt-2 text-[#2d2d2d]/75'>
                Evidence-based diagnosis, transparent treatment plans, and
                ethical clinical practice aligned with dental professional
                standards.
              </p>
            </div>
            <div className='rounded-2xl bg-[#ffffff] p-4 shadow-sm ring-1 ring-[#2d2d2d]/5'>
              <h3 className='text-sm font-semibold text-[#2d2d2d] sm:text-base'>
                Patient-Centered Care
              </h3>
              <p className='mt-2 text-[#2d2d2d]/75'>
                Gentle chairside manner, thorough patient education, and
                personalized treatment tailored to individual oral health needs.
              </p>
            </div>
            <div className='rounded-2xl bg-[#ffffff] p-4 shadow-sm ring-1 ring-[#2d2d2d]/5'>
              <h3 className='text-sm font-semibold text-[#2d2d2d] sm:text-base'>
                Clinical Excellence
              </h3>
              <p className='mt-2 text-[#2d2d2d]/75'>
                Commitment to continuing dental education, adoption of modern
                techniques, and adherence to strict infection control protocols.
              </p>
            </div>
            <div className='rounded-2xl bg-[#ffffff] p-4 shadow-sm ring-1 ring-[#2d2d2d]/5'>
              <h3 className='text-sm font-semibold text-[#2d2d2d] sm:text-base'>
                Collaborative Practice
              </h3>
              <p className='mt-2 text-[#2d2d2d]/75'>
                Integrated teamwork between dental professionals and patients to
                ensure optimal oral health outcomes and long-term dental
                wellness.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

function PrincipalDoctorSection() {
  return (
    <motion.section
      className='bg-[linear-gradient(to_right,#fed400_0%,#fed400_50%,#ffffff_50%,#ffffff_100%)]'
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <div className='mx-auto max-w-5xl px-4 py-8 md:py-10 motion-safe:animate-fade-up motion-safe:animation-delay-200 bg-[#fed400] rounded-4xl'>
        <div className='flex flex-col gap-6 md:flex-row md:items-start'>
          <div className='md:w-1/3'>
            <h2 className='text-xl font-semibold text-[#0051BA] sm:text-2xl'>
              Principal Doctor
            </h2>
            <p className='mt-2 text-[13px] text-white sm:text-base'>
              Leadership and clinical expertise.
            </p>
            <div className='mt-6 text-[13px] leading-relaxed text-[#2d2d2d]/80 sm:text-base'>
              <h3 className='text-base font-semibold text-[#0051BA] sm:text-lg'>
                Dr. Adib Amjad
              </h3>
              <p className='text-[12px] uppercase tracking-[0.18em] text-white sm:text-[13px]'>
                Principal Doctor &amp; Founder
              </p>
              <p className='mt-2'>
                Dedicated to precise, patient-first care using modern dental
                technology to deliver safe, high-quality outcomes.
              </p>
            </div>
          </div>

          {/* Hexagon beehive layout */}
          <div className='flex-1'>
            <div className='mx-auto max-w-lg h-full'>
              <img
                src={Adib}
                alt='Dr. Adib Amjad'
                className='rounded-2xl shadow-sm ring-1 ring-[#2d2d2d]/10'
              />
            </div>
            <p className='mt-3 text-center text-[12px] text-[#2d2d2d]/60 sm:text-[13px]'>
              Dr. Adib Amjad
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );

  function Hexagon({ src, alt }) {
    return (
      <div className='h-20 w-20 sm:h-24 sm:w-24'>
        <div
          className='h-full w-full overflow-hidden bg-[#ffffff] shadow-sm ring-1 ring-[#2d2d2d]/10'
          style={{
            clipPath:
              'polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)',
          }}
        >
          <img
            src={src}
            alt={alt}
            loading='lazy'
            className='h-full w-full object-cover object-center'
          />
        </div>
      </div>
    );
  }
}

function ServicesFacilitiesSection() {
  return (
    <motion.section
      className='border-b border-[#2d2d2d]/10 bg-[#ffffff]'
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <div className='mx-auto max-w-5xl px-4 py-8 md:py-10 motion-safe:animate-fade-up motion-safe:animation-delay-300'>
        <div className='flex flex-col gap-6 md:items-start'>
          <div className='md:w-1/3'>
            <h2 className='text-xl font-semibold text-[#2d2d2d] sm:text-2xl'>
              Services &amp; Facilities
            </h2>
            <p className='mt-2 text-[13px] text-[#2d2d2d]/70 sm:text-base'>
              Modern treatment options in a comfortable setting.
            </p>
          </div>
          <div className='grid flex-1 grid-cols-1 gap-4 text-[13px] sm:grid-cols-2 sm:text-base'>
            <div className='rounded-2xl bg-[#ffffff] p-4 shadow-sm ring-1 ring-[#2d2d2d]/5'>
              <h3 className='text-sm font-semibold text-[#2d2d2d] sm:text-base'>
                Services Offered
              </h3>
              <ul className='mt-2 list-disc space-y-1 pl-4 text-[#2d2d2d]/75'>
                <li>General Dentistry (Scaling, Filling, Extraction)</li>
                <li>
                  Preventive Dentistry (Fluoride, Fissure Sealant, Oral Health
                  Education)
                </li>
                <li>Restorative Dentistry (Crowns, Bridges, Dentures)</li>
                <li>
                  Cosmetic Dentistry (Teeth Whitening, Veneers) &amp;
                  Orthodontics (Braces &amp; Aligners)
                </li>
                <li>
                  Minor Oral Surgery &amp; Pediatric Dentistry (Children&apos;s
                  Dental Care)
                </li>
                <li>Emergency Dental Care</li>
              </ul>
            </div>
            <div className='rounded-2xl bg-[#ffffff] p-4 shadow-sm ring-1 ring-[#2d2d2d]/5'>
              <h3 className='text-sm font-semibold text-[#2d2d2d] sm:text-base'>
                Facilities &amp; Equipment
              </h3>
              <ul className='mt-2 list-disc space-y-1 pl-4 text-[#2d2d2d]/75'>
                <li>Fully equipped dental treatment rooms</li>
                <li>Digital X-Ray system (Intraoral)</li>
                <li>Autoclave sterilization system</li>
                <li>Comfortable patient waiting area</li>
                <li>
                  Modern dental instruments adhering to infection control
                  standards
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

function PatientReviewsSection() {
  const reviews = [
    {
      author_name: 'Firdaus Azizan',
      author_url:
        'https://www.google.com/maps/contrib/111610745578433442771/reviews',
      language: 'en',
      original_language: 'en',
      profile_photo_url:
        'https://lh3.googleusercontent.com/a-/ALV-UjU0STIFnnbGhu-TVzXz2CNTBKGLlU1FqCPMWmQwvXSTcvBKhiB1=s128-c0x00000000-cc-rp-mo-ba2',
      rating: 5,
      relative_time_description: '3 weeks ago',
      text: 'I had such a wonderful experience at PrimoDental Clinic, Kepala Batas! The whole process was super smooth and fast, I didn’t have to wait long at all before meeting the doctor. The dentist took the time to clearly explain every step of the procedure, which really helped me feel calm and confident. the doctors and staff here are incredibly friendly, caring, and professional. You can really feel that they genuinely care about their patients. After my minor surgery, they even checked in and monitored my recovery. Overall, I’m beyond satisfied with their service. If you’re looking for a dental clinic that’s efficient, gentle, and truly patient-oriented, I highly recommend PrimoDental Kepala Batas!',
      time: 1762871598,
      translated: false,
    },
    {
      author_name: 'NAZREEN SALINA AHMAD SABRI',
      author_url:
        'https://www.google.com/maps/contrib/115435760815644478440/reviews',
      language: 'en',
      original_language: 'en',
      profile_photo_url:
        'https://lh3.googleusercontent.com/a-/ALV-UjWWPgr-n9WEGxdmhMNhTknUZu_piVpgmjbvp99Nhe4d4yweUay7=s128-c0x00000000-cc-rp-mo',
      rating: 5,
      relative_time_description: '4 weeks ago',
      text: 'the staffs are very friendly and talkative , they explained everything so well , and the doctor also very polite and hardworking , and also willing to explain all the procedures and the consequences to the patient . a very good attitude from them . for the surrounding , it is so comfortable with the alunan ayatul quran that will make patient feel more calm . the price for all the operation also affordable for everyone . overall this is a good experience for us and we will come again ⭐️⭐️⭐️⭐️',
      time: 1764940259,
      translated: false,
    },
    {
      author_name: 'yana gyu',
      author_url:
        'https://www.google.com/maps/contrib/112520329822785686190/reviews',
      language: 'en',
      original_language: 'en',
      profile_photo_url:
        'https://lh3.googleusercontent.com/a-/ALV-UjWJPiS-6kwgRq9uSBGSaAhCSqBXy9-Mcb6kChRIqinzrY29gjbhFw=s128-c0x00000000-cc-rp-mo',
      rating: 5,
      relative_time_description: 'a month ago',
      text: 'primodental clinic really impressed me! clean place, gentle doctor, and great service from the staff. 10/10 would recommend',
      time: 1761407447,
      translated: false,
    },
    {
      author_name: 'Mohd Halil Talib',
      author_url:
        'https://www.google.com/maps/contrib/115271146864053248452/reviews',
      language: 'en',
      original_language: 'en',
      profile_photo_url:
        'https://lh3.googleusercontent.com/a/ACg8ocLOH_JZeR1NnZ82NKeZYZdD6uYa7OFEOxDdN_avNPlnkiMhhA=s128-c0x00000000-cc-rp-mo',
      rating: 5,
      relative_time_description: '3 weeks ago',
      text: 'Service and friendliness are present at this dental clinic. The best dental workmanship and the best dental facilities that I have ever experienced. I recommend this dental clinic led by a young man with vision. May you be successful and prosper!!',
      time: 1762943212,
      translated: false,
    },
    {
      author_name: 'Salehah Sally',
      author_url:
        'https://www.google.com/maps/contrib/115045147657570888292/reviews',
      language: 'en',
      original_language: 'en',
      profile_photo_url:
        'https://lh3.googleusercontent.com/a-/ALV-UjXunfQ2uiuLLa6RWoGK6SyyY23kw4KoQ72ZD2E7eytOZD-J6Yt9=s128-c0x00000000-cc-rp-mo',
      rating: 5,
      relative_time_description: '4 months ago',
      text: "Primodental clinic is the best. Thank you to the doctor for providing the best service and also to the staff ,you are very   customer friendly. I am very satisfied with the doctor's work which is neat and satisfactory. The doctor is also very friendly and always gives clear explanations. Thank you very much .you all the best👍👍",
      time: 1756733088,
      translated: false,
    },
    {
      author_name: 'usollie Othman',
      author_url:
        'https://www.google.com/maps/contrib/104620481035120016338/reviews',
      language: 'en',
      original_language: 'en',
      profile_photo_url:
        'https://lh3.googleusercontent.com/a/ACg8ocJFDKEbflNkN_X9DNpX0RrvS8rBeV3tZdby3g4LZcAgsvevipY=s128-c0x00000000-cc-rp-mo',
      rating: 5,
      relative_time_description: '5 months ago',
      text:
        '🌟 5-Star Review for PrimoDental 🌟\n' +
        'I had my dental treatment today at PrimoDental, and I’m genuinely impressed by the outstanding service! From the moment I walked in, the staff were welcoming and professional.\n' +
        '\n' +
        'The dentist was gentle, thorough, and explained every step clearly, which made me feel completely at ease. The nurse was kind, attentive, and supportive throughout the whole process. Together, they made what could have been a stressful experience feel smooth and comfortable.\n' +
        '\n' +
        'I truly appreciate the care, patience, and expertise shown today. Highly recommended to anyone looking for top-quality dental care with a personal touch. Thank you, PrimoDental team — I’ll definitely be coming back and will spread the word! 🦷😊👏',
      time: 1750708255,
      translated: false,
    },
    {
      author_name: 'Marya',
      author_url:
        'https://www.google.com/maps/contrib/112479199553835179269/reviews',
      language: 'en',
      original_language: 'en',
      profile_photo_url:
        'https://lh3.googleusercontent.com/a-/ALV-UjU_wJIdHssSCe3GcG7SJFi9qgOvFv_1yrguatVhz0maIUeIeQ4=s128-c0x00000000-cc-rp-mo',
      rating: 5,
      relative_time_description: '5 months ago',
      text: 'Came here for my routine scaling and braces adjustment while balik kampung to Penang. I’ve been to a few dentists in KL, but this clinic is honestly one of the best I’ve been to. Dr. Adib is super passionate and really knows his stuff. The staff were also super friendly and made the whole experience comfortable. You can tell they really take good care of your teeth. Highly recommend if you’re in the area!',
      time: 1751764101,
      translated: false,
    },
  ];

  // useEffect(() => {
  //   axios
  //     .get('http://localhost:5000/api/reviews')
  //     .then((res) => {
  //       // setReviews(res.data.reviews || []);
  //       console.log(res.data);
  //     })
  //     .catch((err) => console.error(err));
  // }, []);

  return (
    <motion.section
      className=' bg-[#ffffff]'
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <div className='mx-auto max-w-5xl px-4 py-8 md:py-10 motion-safe:animate-fade-up motion-safe:animation-delay-400'>
        <div className='mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'>
          <div>
            <h2 className='text-xl font-semibold text-[#2d2d2d] sm:text-2xl'>
              Patient Reviews
            </h2>
            <p className='mt-2 max-w-2xl text-[13px] text-[#2d2d2d]/75 sm:text-base'>
              What our patients say about their experience at Klinik Pergigian
              Primodental.
            </p>

            <Link
              to='https://search.google.com/local/writereview?placeid=ChIJlZWQ2S7bSjARL460RO671to'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex w-full md:w-fit items-center gap-2 rounded-md border border-[#dddddd] bg-white px-5 py-2 text-black mt-2'
            >
              <FcGoogle className='text-xl' />
              Write a Google Review
            </Link>
          </div>
          <div className='flex items-center gap-2 rounded-full bg-[#fed400]/10 px-3 py-2 ring-1 ring-[#2d2d2d]/10'>
            <span className='text-sm font-semibold text-[#2d2d2d]'>5.0</span>
            <div className='flex'>
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  viewBox='0 0 20 20'
                  className='h-4 w-4 text-[#fed400]'
                >
                  <path
                    fill='currentColor'
                    d='M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.953L10 0l2.951 5.957 6.561.953-4.756 4.635 1.122 6.545z'
                  />
                </svg>
              ))}
            </div>
            {/* <span className='text-[12px] text-[#2d2d2d]/60'>
              {reviews.length} reviews
            </span> */}
          </div>
        </div>

        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 '>
          {reviews
            .sort((a, b) => b.time - a.time)
            .filter((_, idx) => idx < 6)
            .map((r, idx) => (
              <article
                key={`${r.author_name}-${idx}`}
                className='flex h-full flex-col rounded-2xl bg-[#ffffff] p-4 shadow-sm ring-1 ring-[#2d2d2d]/10'
              >
                <div className='flex items-center gap-3'>
                  <img
                    src={r.profile_photo_url}
                    alt={`${r.author_name} profile`}
                    referrerPolicy='no-referrer'
                    loading='lazy'
                    className='h-10 w-10 rounded-full object-cover'
                  />
                  <div className='min-w-0'>
                    <p className='truncate text-sm font-semibold text-[#2d2d2d]'>
                      {r.author_name}
                    </p>
                    <p className='text-[12px] text-[#2d2d2d]/60'>
                      {dayjs.unix(r.time).format('D MMM YYYY')}
                    </p>
                  </div>
                </div>

                <div className='mt-3 flex items-center gap-1'>
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      viewBox='0 0 20 20'
                      className={`h-4 w-4 ${
                        i < (r.rating || 0)
                          ? 'text-[#fed400]'
                          : 'text-[#2d2d2d]/20'
                      }`}
                    >
                      <path
                        fill='currentColor'
                        d='M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.953L10 0l2.951 5.957 6.561.953-4.756 4.635 1.122 6.545z'
                      />
                    </svg>
                  ))}
                </div>

                <p className='mt-3 text-[13px] leading-relaxed text-[#2d2d2d]/80'>
                  {r.text}
                </p>

                <div className='mt-3'>
                  <a
                    href={r.author_url}
                    target='_blank'
                    rel='noreferrer'
                    className='text-[12px] text-[#0051BA] hover:underline'
                  >
                    View on Google Maps
                  </a>
                </div>
              </article>
            ))}

          {reviews.length === 0 && (
            <div className='col-span-full grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className='animate-pulse rounded-2xl bg-[#ffffff] p-4 shadow-sm ring-1 ring-[#2d2d2d]/10'
                >
                  <div className='flex items-center gap-3'>
                    <div className='h-10 w-10 rounded-full bg-[#2d2d2d]/10' />
                    <div className='flex-1'>
                      <div className='h-3 w-24 rounded bg-[#2d2d2d]/10' />
                      <div className='mt-2 h-3 w-32 rounded bg-[#2d2d2d]/10' />
                    </div>
                  </div>
                  <div className='mt-3 h-4 w-28 rounded bg-[#2d2d2d]/10' />
                  <div className='mt-3 h-16 rounded bg-[#2d2d2d]/10' />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.section>
  );
}

const SECTIONS = [
  { id: 'about', render: () => <AboutSection /> },
  // { id: 'vision-mission', render: () => <VisionMissionSection /> },
  { id: 'core-values', render: () => <CoreValuesSection /> },
  { id: 'patient-reviews', render: () => <PatientReviewsSection /> },
  { id: 'principal-doctor', render: () => <PrincipalDoctorSection /> },
  {
    id: 'services-facilities',
    render: () => <ServicesFacilitiesSection />,
  },
];

export default function LandingPage() {
  const heroRef = useRef(null);
  const [showFixedHeader, setShowFixedHeader] = useState(false);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // When hero is NOT visible → show fixed header
        setShowFixedHeader(!entry.isIntersecting);
      },
      {
        root: null, // viewport
        threshold: 0.1, // 0.1 = 10% visible
      }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <div className='min-h-screen bg-[#ffffff] text-[#2d2d2d]'>
      {/* HERO / INTRO */}
      <motion.header
        ref={heroRef}
        className='bg-[#fed400]'
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className='mx-auto flex max-w-5xl flex-col gap-2 md:gap-8 px-4 pb-10 pt-8 md:flex-row-reverse md:items-center md:pt-12'>
          {/* Desktop hero image */}
          <div className='mt-0 flex-1 md:mt-0'>
            <img
              src={LogoPrimo}
              alt='Klinik Primo Dental Logo'
              className='h-20 md:h-full w-20 md:w-full object-contain object-center'
            />
          </div>

          <div className='flex-1 space-y-4 text-[13px] sm:text-base'>
            <p className='text-[11px] font-semibold uppercase tracking-[0.25em] text-[#2d2d2d]/80'>
              KLINIK PERGIGIAN PRIMODENTAL
            </p>
            <h1 className='text-balance text-2xl font-semibold tracking-tight  sm:text-3xl md:text-4xl'>
              <span className='block text-[#0051BA]'>
                Comprehensive dental care
              </span>
              <span className='block text-xl text-white font-semibold sm:text-2xl'>
                for a brighter, healthier smile.
              </span>
            </h1>
            <p className='max-w-xl leading-relaxed text-[#2d2d2d]/80'>
              Your smile is a signature of confidence, and at our clinic, we
              elevate dental care to an experience of precision, comfort, and
              refinement. Merging cutting-edge technology with personalized
              attention, we deliver exceptional results in an environment
              designed for calm, discretion, and sophistication. Excellence
              isn't just our standard—it's our promise.
            </p>

            <div className='flex gap-3 pt-2 flex-row sm:items-center'>
              <Link
                to='http://www.wasap.my/601158858921'
                rel='noopener noreferrer'
                className='inline-flex items-center justify-center rounded-full bg-[#0051BA] px-5 py-2.5 text-[13px] font-medium text-[#ffffff] shadow-sm transition hover:bg-black'
              >
                <FaWhatsapp className='text-xl mr-2' />
                <span>Chat with Us</span>
              </Link>
              <Popover>
                <PopoverButton className='inline-flex items-center justify-center rounded-full border border-[#2d2d2d]/20 bg-[#ffffff] px-5 py-2.5 text-[13px] font-medium text-[#0051BA] hover:border-[#0051BA]/40'>
                  <CiLocationOn className='text-2xl mr-2' />
                  <span>Find Us</span>
                </PopoverButton>
                <PopoverPanel
                  transition
                  anchor='bottom'
                  className=' space-y-1 rounded-xl bg-white text-sm/6 transition duration-200 ease-in-out [--anchor-gap:--spacing(2)] data-closed:-translate-y-1 data-closed:opacity-0 cursor-pointer p-3 z-11 shadow-lg'
                >
                  <Link
                    className='flex gap-2 rounded-lg px-3 py-2 transition hover:bg-gray-700/5'
                    to='https://waze.com/ul/hw0zrmm5k3'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <FaWaze className='text-xl' />
                    <p className='font-semibold text-gray-700'>Waze</p>
                  </Link>
                  <Link
                    className='flex gap-2 rounded-lg px-3 py-2 transition hover:bg-gray-700/5'
                    to='https://maps.app.goo.gl/YW9hmPjz6vmsETqh6'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <FaMapMarkedAlt className='text-xl' />
                    <p className='font-semibold text-gray-700 whitespace-nowrap'>
                      Google Maps
                    </p>
                  </Link>
                  {/* https://maps.app.goo.gl/YW9hmPjz6vmsETqh6?g_st=ipc */}
                </PopoverPanel>
              </Popover>
            </div>
          </div>
        </div>
      </motion.header>
      {/* Fixed header that appears after scrolling past hero */}
      <motion.div
        className='fixed inset-x-0 top-0 z-40 bg-[#fed400]/95 backdrop-blur border-b border-[#2d2d2d]/10'
        initial={{ y: -64, opacity: 0 }}
        animate={
          showFixedHeader ? { y: 0, opacity: 1 } : { y: -64, opacity: 0 }
        }
        transition={{ duration: 0.25, ease: 'easeOut' }}
      >
        <div className='mx-auto flex max-w-5xl items-center justify-between px-4 py-2'>
          <div className='flex items-center gap-2'>
            <img
              src={LogoPrimo}
              alt='Klinik Pergigian Primodental'
              className='h-8 w-8 rounded-full object-contain'
            />
            <span className='text-[12px] font-semibold tracking-[0.18em] text-[#2d2d2d]/80 uppercase'>
              Klinik Pergigian Primodental
            </span>
          </div>
          <div className='flex flex-row space-x-2'>
            <Link
              to='http://www.wasap.my/601158858921'
              rel='noopener noreferrer'
              className='inline-flex items-center justify-center rounded-full bg-[#0051BA] px-1.5 md:px-4 py-1.5 text-[12px] font-medium text-white shadow-sm hover:bg-black'
            >
              <FaWhatsapp className='md:mr-1 text-xl' />
              <span className='hidden md:flex'>Chat</span>
            </Link>
            <Popover>
              <PopoverButton className='inline-flex items-center justify-center rounded-full bg-[#0051BA] px-1.5 md:px-3 py-1.5 text-[12px] font-medium text-white shadow-sm hover:bg-black'>
                <CiLocationOn className='text-xl font-bold' />
                <span className='hidden md:flex'>Find Us</span>
              </PopoverButton>
              <PopoverPanel
                transition
                anchor='bottom'
                className=' space-y-1 rounded-xl bg-white text-sm/6 transition duration-200 ease-in-out [--anchor-gap:--spacing(2)] data-closed:-translate-y-1 data-closed:opacity-0 cursor-pointer p-3 z-11 shadow-lg'
              >
                <Link
                  className='flex gap-2 rounded-lg px-3 py-2 transition hover:bg-gray-700/5'
                  to='https://waze.com/ul/hw0zrmm5k3'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FaWaze className='text-xl' />
                  <p className='font-semibold text-gray-700'>Waze</p>
                </Link>
                <Link
                  className='flex gap-2 rounded-lg px-3 py-2 transition hover:bg-gray-700/5'
                  to='https://maps.app.goo.gl/YW9hmPjz6vmsETqh6'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FaMapMarkedAlt className='text-xl' />
                  <p className='font-semibold text-gray-700 whitespace-nowrap'>
                    Google Maps
                  </p>
                </Link>
              </PopoverPanel>
            </Popover>
          </div>
        </div>
      </motion.div>

      {/* Virtualized main sections including Patient Reviews */}
      <div className=' border-t border-[#2d2d2d]/10'>
        {SECTIONS.map((section) => (
          <motion.div
            key={section.id}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            {section.render()}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
