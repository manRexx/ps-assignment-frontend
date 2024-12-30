import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchUserById } from "../api/data";
import InfoSection from "../components/InfoSection";

const UserDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadUser = async () => {
      try {
        setLoading(true);
        const data = await fetchUserById(id);
        setUser(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-500 p-4">Error: {error}</div>;
  }

  if (!user) return null;
  return (
    <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-8">
      <button
        onClick={() => navigate("/")}
        className="mb-6 flex items-center text-blue-500 hover:text-blue-700"
      >
        Back to Users
      </button>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/4">
          <div className="text-center">
            <img
              src={user.image}
              alt={`${user.firstName} ${user.lastName}`}
              className="w-40 h-40 rounded-full mx-auto mb-4 object-cover"
            />
            <h1 className="text-2xl font-bold">
              {user.firstName} {user.lastName}
            </h1>
            <p className="text-gray-500 mt-1">
              {user.maidenName && `(${user.maidenName})`}
            </p>
            <p className="text-gray-600 mt-2">{user.company.title}</p>
            <span
              className={`inline-block mt-2 px-3 py-1 rounded-full ${
                user.role === "admin"
                  ? "bg-purple-100 text-purple-800"
                  : "bg-blue-100 text-blue-800"
              }`}
            >
              {user.role}
            </span>
          </div>
        </div>

        <div className="md:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <InfoSection title="Personal Information">
            <InfoSection.Item label="Age" value={user.age} />
            <InfoSection.Item label="Gender" value={user.gender} />
            <InfoSection.Item label="Birth Date" value={user.birthDate} />
            <InfoSection.Item label="Blood Group" value={user.bloodGroup} />
            <InfoSection.Item label="Height" value={`${user.height}`} />
            <InfoSection.Item label="Weight" value={`${user.weight}`} />
            <InfoSection.Item label="Eye Color" value={user.eyeColor} />
            <InfoSection.Item
              label="Hair Colour"
              value={`${user.hair.color}`}
            />
            <InfoSection.Item label="Hair Type" value={`${user.hair.type}`} />
          </InfoSection>

          <InfoSection title="Company">
            <InfoSection.Item label="Name" value={user.company.name} />
            <InfoSection.Item
              label="Department"
              value={user.company.department}
            />
            <InfoSection.Item label="Title" value={user.company.title} />
            <InfoSection.Item
              label="Address"
              value={user.company.address.address}
            />
            <InfoSection.Item label="City" value={user.company.address.city} />
            <InfoSection.Item
              label="State"
              value={`${user.company.address.state}`}
            />
            <InfoSection.Item
              label="State Code"
              value={`${user.company.address.stateCode}`}
            />
            <InfoSection.Item
              label="Country"
              value={user.company.address.country}
            />
            <InfoSection.Item
              label="Postal Code"
              value={user.company.address.postalCode}
            />
            <InfoSection.Item
              label="Coordinates (Lat, Lng)"
              value={`(${user.company.address.coordinates.lat}, ${user.company.address.coordinates.lng})`}
            />
          </InfoSection>

          <InfoSection title="Address">
            <InfoSection.Item label="Street" value={user.address.address} />
            <InfoSection.Item label="City" value={user.address.city} />
            <InfoSection.Item label="State" value={`${user.address.state}`} />
            <InfoSection.Item
              label="State Code"
              value={`${user.address.stateCode}`}
            />
            <InfoSection.Item label="Country" value={user.address.country} />
            <InfoSection.Item
              label="Postal Code"
              value={user.address.postalCode}
            />
            <InfoSection.Item
              label="Coordinates (Lat, Lng)"
              value={`(${user.address.coordinates.lat}, ${user.address.coordinates.lng})`}
            />
          </InfoSection>

          <InfoSection title="Contact Information">
            <InfoSection.Item label="Email" value={user.email} />
            <InfoSection.Item label="Phone" value={user.phone} />
            <InfoSection.Item label="Username" value={user.username} />
            <InfoSection.Item label="IP Address" value={user.ip} />
            <InfoSection.Item label="MAC Address" value={user.macAddress} />
          </InfoSection>

          <InfoSection title="Education & Identity">
            <InfoSection.Item label="University" value={user.university} />
            <InfoSection.Item label="EIN" value={user.ein} />
            <InfoSection.Item label="SSN" value={user.ssn} />
          </InfoSection>

          <InfoSection title="Bank Information">
            <InfoSection.Item label="Card Type" value={user.bank.cardType} />
            <InfoSection.Item
              label="Card Number"
              value={`${user.bank.cardNumber}`}
            />
            <InfoSection.Item label="Expiry" value={user.bank.cardExpire} />
            <InfoSection.Item label="Currency" value={user.bank.currency} />
            <InfoSection.Item label="IBAN" value={user.bank.iban} />
          </InfoSection>

          <InfoSection title="User Agent">
            <InfoSection.Item
              label="User Agent"
              value={user.userAgent}
              className="break-all"
            />
          </InfoSection>

          <InfoSection title="Crypto">
            <InfoSection.Item label="Coin" value={user.crypto.coin} />
            <InfoSection.Item label="Network" value={user.crypto.network} />
            <InfoSection.Item label="Wallet" value={`${user.crypto.wallet}`} />
          </InfoSection>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
