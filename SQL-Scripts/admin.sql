DROP SEQUENCE ADMIN_SEQ;
DROP TABLE ADMIN CASCADE CONSTRAINTS;

CREATE TABLE ADMIN(ADMIN_ID NUMBER(3) PRIMARY KEY, ADMIN_NAME VARCHAR2(20), AGE NUMBER(3), MOBILE_NUMBER NUMBER(12), LOGIN_ID NUMBER(3), FOREIGN KEY(LOGIN_ID) REFERENCES ADMINLOGIN(LOGIN_ID));

CREATE SEQUENCE ADMIN_SEQ START WITH 1 INCREMENT BY 1;
