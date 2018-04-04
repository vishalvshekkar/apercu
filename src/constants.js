import logo from '../static/icons/logo.png';

// this goes in title of the page and as alt text for the image in the logo
export const pageTitle = 'Modvision';

// this is for SEO. I have copied the default header for this.
export const pageDescription = 'Power your business with our image and video recognition models';

// this is also for SEO. Please change it after you deploy.
export const pageLink = 'https://www.modvision.com';

// for SEO. No need to touch it, just make sure you keep the name logo.png.
export const pageImage = logo;

/**
 * Social media stuff below. Handle them in time.
 */
export const twitterHandle = '@modvisionai';

export const twitterLink = 'https://twitter.com/modvisionai';

export const facebookLink = 'https://facebook.com/modvisionai';

export const instaLink = 'https://instagram.com/modvisionai';

// footer contact link
export const contactLink = 'mailto:hello@modvision.ai';
export const contactLinkLabel = 'here';

// this is for the headers
export const typeStrings = {
  'none': "Power your <b>business</b> with our image and video <b>recognition</b> models",
  'organize-and-create': "Automatically <b>tag</b> and add <b>key words</b> to your image and video library",
  'visual-search': "Connect <b>customers</b> with what they’re looking for through <b>better</b> search",
  'moderation': "Automatically <b>filter</b> out <b>sensitive</b> content from your platform",
  'custom-training': "<b>Teach</b> a model to recognize any concept with <b>custom</b> training",
  'team': "We are a worldwide team with offices in <b>NYC</b>, <b>Paris</b> and <b>Bangalore</b>",
}

export const speed = 30; // Typewriter speed, Lower is faster.

// The tabs on the left
export const tabLinks = [
  { 
    id: 'organize-and-create',
    label: "Organize & Curate"
  },
  { 
    id: 'visual-search',
    label: "Visual Search"
  },
  { 
    id: 'moderation',
    label: "Moderation"
  },
  { 
    id: 'custom-training',
    label: "Custom Training"
  },
  {
    id: 'team',
    label: "Team"
  },
]

// tab content on the right. Team is handled especially in the code due to different design.
export const tabContent = {
  'organize-and-create': [
    "Effortlessly manage large media libraries, organize your collection of media assets through auto-tagging and categorization.",
    "Save time searching for image and video content, easily find any image or video through tag search and visual similarity.",
    "Engage your audience with better content, curate more relevant content and improve your site’s search results for your users.",
  ],
  'visual-search': [
    "Increase user engagement by helping users find exactly what they’re looking for through search by image for visually similar content and products.",
    "Sell more with visual recommendations by serving relevant image-based product recommendations based on a customer’s current behavior, not past purchases.",
    "Improve content discovery by onnecting users with more content through a better",
  ],
  'moderation': [
    "Protect your brand from unwanted content by automatically filter or flag unwanted media from user-generated content or product listings.",
    "Improve your user experience Moderate user-generated content without the need to wait for human moderation or manual review.",
    "Save time through automation Augment your human moderators and speed up their workflows by automatically tagging each image.",
  ],
  'custom-training': [
    "Teach your model to recognize concepts using your own vocabulary and taxonomy instead of general terms.",
    "Train a model to recognize a new concept with just a handful of examples.",
    "Get better results when browsing and searching your content by training a model to recognize more concepts.",
  ],
  'team': [
    {
      name: 'Louis-Alexandre Etezad-Heydari',
      designation: 'Partner, Strategy'
    },
    {
      name: 'Jules Chaufour',
      designation: 'Partner, Product'
    },
    {
      name: 'Vishal V. Shekkar',
      designation: 'Partner, Engineering'
    },
    {
      name: 'Vishwarath Reddy',
      designation: 'Partner, Operation'
    },
    {
      name: 'Neeraj K',
      designation: 'Lead ML Engineer'
    },
    {
      name: 'Hemant Kumar Goyal',
      designation: 'Lead System Engineer'
    },
  ],
}

// this is for the alphabetical numbering
export const alphabetArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
