# 🐾 Animal Adoption Website

Welcome to the **Animal Adoption Website**! This project provides a list of adorable animals in need of a loving home. You can filter by different types of animals to find your perfect pet! 🏠❤️

🌐 **Live Demo**: [animaladoptionhere.netlify.app](https://animaladoptionhere.netlify.app)

## 🚀 Project Overview

This website fetches data from an external API to display a list of adoptable animals, along with their name, age, species, and a brief description. Each animal card includes a link for potential adopters to learn more about their new furry (or scaly) friend!

### Key Features

- **Filter by Species**: Easily filter animals by type (e.g., dogs, cats, rabbits).
- **Responsive Design**: Built with CSS to look great on both desktop and mobile.
- **Dynamic Data Loading**: Animal data is dynamically fetched from an API and displayed with JavaScript.

## 💻 Tech Stack

- **HTML**: Structure of the website
- **CSS**: Styling, including a hero section and responsive design
- **JavaScript**: Fetching and displaying data using `insertAdjacentHTML`

## 🛠️ Implementation

### Data Display with `insertAdjacentHTML`

In this project, I used `insertAdjacentHTML` to insert animal data from the API directly into the DOM. This approach allowed me to dynamically add each animal's card without altering the original HTML structure.

Brad from [this tutorial](https://www.youtube.com/watch?v=S2CxPw-crU8&t=1371s) used a different approach to render data, but I adapted it to use `insertAdjacentHTML` for efficient DOM updates and flexibility.

### Usage

1. Clone the repository or download the files.
2. Open `index.html` in a browser to view the website locally.
3. Interact with the filter buttons to view animals by type.

## 🙏 Acknowledgments

Special thanks to Brad from [this tutorial](https://www.youtube.com/watch?v=S2CxPw-crU8&t=1371s) for his guidance on implementing data rendering.

