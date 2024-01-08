import React from 'react';
import ReactDOM from 'react-dom/client';
import logo from './assets/logo.jpg';
import biryani from './assets/biryani.jpg';

const Header = () => {
  return (
    <div className='header'>
      <div className='logo-container'>
        <img className="logo" src={logo} alt="logo"/>
      </div>
      <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

const RestaurentCard = (props) => {

  const { resData } = props;

  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } = resData.info;

  const { deliveryTime } = resData.info.sla;

  return (
    <div className='restaurent-card'>
      <img className="food-item" src={
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId
      } alt="food-item"/>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{deliveryTime} minutes</h4>
      <h4>{costForTwo}</h4>
    </div>
  )
}

const restaurantList = [
  {
    "info": {
      "id": "786921",
      "name": "Sri Bhaskar Family Restaurant",
      "cloudinaryImageId": "b14cd9fc40129fcfb97aa7e621719d07",
      "locality": "Lakshmipolavaram",
      "areaName": "Ravulapalem",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Chinese",
        "Seafood",
        "Biryani",
        "Kebabs",
        "Salads"
      ],
      "avgRating": 4,
      "parentId": "467944",
      "avgRatingString": "4.0",
      "totalRatingsString": "10+",
      "sla": {
        "deliveryTime": 22,
        "lastMileTravel": 1.6,
        "serviceability": "SERVICEABLE",
        "slaString": "22 mins",
        "lastMileTravelString": "1.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-01-08 22:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹120 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "isNewlyOnboarded": true,
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/sri-bhaskar-family-restaurant-lakshmipolavaram-ravulapalem-ravulapalem-786921",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "781520",
      "name": "Sai Lavanya Pulka Wonder",
      "cloudinaryImageId": "313774ada0dc4f878df143b7d7a095f0",
      "locality": "Victory Bazar",
      "areaName": "Ravulapalem",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "North Indian",
        "Chinese"
      ],
      "avgRating": 4.3,
      "parentId": "465378",
      "avgRatingString": "4.3",
      "totalRatingsString": "20+",
      "sla": {
        "deliveryTime": 20,
        "lastMileTravel": 3.6,
        "serviceability": "SERVICEABLE",
        "slaString": "20 mins",
        "lastMileTravelString": "3.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-01-08 22:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹120 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "isNewlyOnboarded": true,
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/sai-lavanya-pulka-wonder-victory-bazar-ravulapalem-ravulapalem-781520",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "781532",
      "name": "Sai Lavanya Fast Foods",
      "cloudinaryImageId": "0da26b9dde86dc03dad7b4a1a747d2bd",
      "locality": "Victory Bazar",
      "areaName": "Ravulapalem",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Chinese"
      ],
      "avgRating": 4.1,
      "parentId": "465381",
      "avgRatingString": "4.1",
      "totalRatingsString": "10+",
      "sla": {
        "deliveryTime": 31,
        "lastMileTravel": 3.6,
        "serviceability": "SERVICEABLE",
        "slaString": "31 mins",
        "lastMileTravelString": "3.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-01-08 22:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹120 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "isNewlyOnboarded": true,
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/sai-lavanya-fast-foods-victory-bazar-ravulapalem-ravulapalem-781532",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "783365",
      "name": "Bismilla Biryani",
      "cloudinaryImageId": "da2592e0d25f079cbf9aedf436cabf6f",
      "locality": "V Square Theatre",
      "areaName": "Ravulapalem",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Biryani",
        "Chinese"
      ],
      "avgRating": 4,
      "parentId": "47209",
      "avgRatingString": "4.0",
      "totalRatingsString": "50+",
      "sla": {
        "deliveryTime": 21,
        "lastMileTravel": 3.7,
        "serviceability": "SERVICEABLE",
        "slaString": "21 mins",
        "lastMileTravelString": "3.7 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-01-08 22:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹120 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "isNewlyOnboarded": true,
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/bismilla-biryani-v-square-theatre-ravulapalem-ravulapalem-783365",
      "type": "WEBLINK"
    }
  }
]

const Body = () => {
  return (
    <div className='body'>
      <div className='search'>Search</div>
      <div className='restaurent-container'>
       {
          restaurantList.map((resaurant) => <RestaurentCard key={resaurant.info.id} resData={resaurant}/>)
       }
      </div>
    </div>
  )
}

const AppLayout = () => {
  return (
    <div className='app'>
      <Header/>
      <Body/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);
