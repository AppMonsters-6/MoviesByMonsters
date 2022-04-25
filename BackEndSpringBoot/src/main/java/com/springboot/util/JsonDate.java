package com.springboot.util;

import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import com.fasterxml.jackson.core.JacksonException;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.deser.std.StdDeserializer;

public class JsonDate extends StdDeserializer<Date> {
	private static final long serialVersionUID = 1;
	
	public JsonDate() {
		this(null);
	}
	
	public JsonDate(Class<?> clazz) {
		super(clazz);
	}

	@Override
	public Date deserialize(JsonParser jsonParser, DeserializationContext context) throws IOException, JacksonException {
		String date = jsonParser.getText();
		try {
			SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
			return sdf.parse(date);
		} catch(ParseException pe) {
			return null;
		}
	}
}
