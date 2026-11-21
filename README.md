# TravelTrove 🌴

A travel-booking frontend where users browse destinations, search hotels by location, filter results and open property pages with photo galleries. Live hotel data comes from the **Booking.com API via RapidAPI**.

🌐 **Live demo:** [traveltrove-al.netlify.app](https://traveltrove-al.netlify.app)

---

## ✨ Features

- **Landing page** with destination highlights, "why choose us" and a gallery
- **Hotel search** by location (`/booking/:location`) with filters, loading states and an empty-results view
- **Property pages** with a header, description, ratings and a carousel gallery
- **Client-side routing** with route loaders (React Router v6) and custom error / 404 pages
- **Responsive layout** with a mobile nav, built with Tailwind CSS

## 🛠️ Tech stack

React · React Router · Tailwind CSS · Axios · RapidAPI (Booking.com) · react-multi-carousel · react-slider

## 🚀 Running locally

```bash
git clone https://github.com/Valloiced/travel-trove.git
cd travel-trove
npm install
```

Create a `.env` file (get a free key at [RapidAPI](https://rapidapi.com/)):

```env
REACT_APP_RAPID_API_KEY=your_rapidapi_key
REACT_APP_RAPID_API_HOST=booking-com.p.rapidapi.com
```

```bash
npm start
```

---

Made by [Vince Sualog](https://github.com/Valloiced)
