import Layout from "@/components/Layout";
import { db } from "@/firebase/firebase-config";
import { Button, CircularProgress, TextField } from "@mui/material";
import { addDoc, collection } from "firebase/firestore";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Swal from "sweetalert2";
import * as yup from "yup";

const contact = () => {
  const [loading, setLoading] = useState(false);
  const { t, i18n } = useTranslation("ContactPage");
  const isRTL = i18n.language === "ur" || i18n.language === "ar";

  const validationSchema = yup.object({
    email: yup
      .string(t("emailError1"))
      .email(t("emailError2"))
      .required(t("emailError3")),
    firstName: yup.string(t("firstNameError1")).required(t("firstNameError2")),
    lastName: yup.string(t("lastNameError1")).required(t("lastNameError2")),
    message: yup.string(t("messageError1")).required(t("messageError2")),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
      createdAt: new Date(),
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  const msgRef = collection(db, "messages");

  const handleSubmit = async (values) => {
    try {
      setLoading(true);
      await addDoc(msgRef, {
        values,
      });
      setLoading(false);
      Swal.fire({
        icon: "success",
        title: t("messageSent"),
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      setLoading(false);
      console.error("Error adding document: ", error);
      Swal.fire({
        icon: "error",
        title: t("messageSentError"),
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <Layout>
      <div className="flex flex-col lg:flex-row lg:px-24 py-12">
        <div
          className={`flex flex-col justify-center items-center  ${
            isRTL ? "lg:items-end" : "lg:items-start"
          } lg:w-1/2`}
        >
          <p className={`font-bold text-2xl ${isRTL ? "text-right" : ""}`}>
            {t("headerText")}
          </p>
          <p className={`pt-5 px-10 lg:px-0 ${isRTL ? "text-right" : ""} `}>
            {t("paragraph1")}
          </p>
        </div>
        <div className="lg:w-1/2">
          <form onSubmit={formik.handleSubmit}>
            <div className="flex flex-col space-y-3 p-6 bg-white border-1.5 rounded-lg shadow relative m-10">
              <div className="font-semibold text-3xl flex justify-center mb-6">
                {t("formHeader")}
              </div>
              <div className="flex flex-row space-x-2">
                <TextField
                  id="firstName"
                  name="firstName"
                  type="text"
                  label={t("firstNameField")}
                  dir={isRTL ? "rtl" : "ltr"}
                  variant="outlined"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  size="small"
                  fullWidth
                  error={
                    formik.touched.firstName && Boolean(formik.errors.firstName)
                  }
                  helperText={
                    formik.touched.firstName && formik.errors.firstName
                  }
                />

                <TextField
                  id="lastName"
                  name="lastName"
                  type="text"
                  label={t("lastNameField")}
                  dir={isRTL ? "rtl" : "ltr"}
                  variant="outlined"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.lastName && Boolean(formik.errors.lastName)
                  }
                  helperText={formik.touched.lastName && formik.errors.lastName}
                  size="small"
                  fullWidth
                />
              </div>
              <TextField
                id="email"
                name="email"
                type="text"
                label={t("emailField")}
                dir={isRTL ? "rtl" : "ltr"}
                variant="outlined"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                size="small"
              />

              <TextField
                id="message"
                name="message"
                type="text"
                label={t("messageField")}
                dir={isRTL ? "rtl" : "ltr"}
                variant="outlined"
                multiline
                rows={4}
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.message && Boolean(formik.errors.message)}
                helperText={formik.touched.message && formik.errors.message}
                size="small"
              />
              <div className="flex justify-start w-full">
                <Button
                  type="submit"
                  variant="contained"
                  className="w-40 max-w-36"
                  disabled={loading}
                >
                  {loading ? <CircularProgress size={24} /> : t("submitButton")}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default contact;
