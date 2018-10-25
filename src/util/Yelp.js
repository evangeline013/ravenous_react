const apiKey = 'SObWxyi74z-3PVRAVwKkDbqOCCbEHQTPF0uiRVoZoKiaIJQaNDySrQSJxz2hgQyqIe2Bk-exfEqtesrUBjkMNkHYAit73HuLEcIr3mpL6nc44ScXGXk6TEEFcqXQW3Yx';

const Yelp = {
  search(term, location, sortBy) {
    const endpoint = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`;
    return fetch(endpoint, {
      headers: {Authorization: `Bearer ${apiKey}`}
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if(jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => {
          return {
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories.title,
            rating: business.rating,
            reviewCount: business.review_count
          };
        });
      } else {
        return [];
      }
    })
  }
};

export default Yelp;
