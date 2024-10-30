import {Services} from "./interface/services";
import {Review} from "./interface/review";

export const services: Services[] = [
  {
    title: 'Référencement (SEO)',
    description: 'Positionnez votre site sur les premiers résultats de Google pour générer durablement des visites qualifiées\n' +
      '            avec l’accompagnement de notre équipe ! Le SEO est le premier levier d’acquisition de trafic.',
    faIcon: 'fa-chart-line'
  },
  {
    title: 'Social Ads',
    description: 'Optimisez ou créez des campagnes Social media Ads mieux ciblées et plus performantes ! L’immense audience\n' +
      '            des principaux réseaux sociaux permet d’atteindre votre cible à coup sûr.',
    faIcon: 'fa-home'
  },
  {
    title: 'Développement de site Web',
    description: 'Créer un site web esthétique, performant et optimisé pour la conversion du trafic grâce à notre agence web\n' +
      '            ! Nous vous aidons à concevoir ou à refondre votre site vitrine et e-commerce.',
    faIcon: 'fa-code'
  }
]

export const reviews: Review[] = [
  {
    image: 'Marie D.',
    description: 'Je suis absolument ravie de mon nouveau site internet ! L\'équipe de Webcome & Co a su cerner mes besoins et a créé un site qui reflète\n' +
      'parfaitement mon activité. Le design est moderne, épuré et\n' +
      'fonctionne parfaitement sur tous les appareils. De plus, le suivi après\n' +
      'la livraison a été irréprochable. Je recommande vivement leurs\n' +
      'services !'
  },
  {
    image: 'Julien T.',
    description: '"Excellente expérience avec Webcome ! Non seulement ils ont conçu\n' +
      'un site web magnifique pour mon entreprise, mais ils ont également\n' +
      'pris le temps de m\'expliquer chaque étape du processus. Leurs\n' +
      'conseils en SEO m\'ont permis de mieux positionner mon site sur\n' +
      'Google dès les premières semaines. Je referai appel à eux sans hésiter\n' +
      'pour mes futurs projets.'
  },
  {
    image: 'Sophie L.',
    description: 'Je ne pouvais pas espérer mieux ! Mon site web est à la fois\n' +
      'esthétique et fonctionnel. L\'équipe a su faire preuve d\'une grande\n' +
      'créativité tout en respectant les délais impartis. Grâce à leur travail,\n' +
      'j\'ai constaté une nette augmentation du trafic sur mon site et des\n' +
      'conversions. Un grand merci pour leur professionnalisme !"'
  },
  {
    image: 'Sophie L.',
    description: 'Je ne pouvais pas espérer mieux ! Mon site web est à la fois\n' +
      'esthétique et fonctionnel. L\'équipe a su faire preuve d\'une grande\n' +
      'créativité tout en respectant les délais impartis. Grâce à leur travail,\n' +
      'j\'ai constaté une nette augmentation du trafic sur mon site et des\n' +
      'conversions. Un grand merci pour leur professionnalisme !"'
  },
]
