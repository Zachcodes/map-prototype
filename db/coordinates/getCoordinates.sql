select b.name, c.lat, c.lng, c.description, c.id as coordinate_id, b.id as business_id
from coordinates c
join business b 
on b.id = c.business_id