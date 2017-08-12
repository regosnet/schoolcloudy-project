package com.schoolcloudy.web.configuration;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.context.annotation.Profile;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseBuilder;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseType;

@Configuration
@PropertySource("classpath:/database_access.properties")
@Import(BusinessConfiguration.class)
public class DataSourceConfig {
	
	@Autowired
	private Environment env;
	
	@Bean(name="dataSource") 
	@Profile("prod")
	public DataSource dataSourceForProd() {
		DriverManagerDataSource dds = new DriverManagerDataSource();
		dds.setDriverClassName(env.getProperty("db.driver"));
		dds.setUrl(env.getProperty("db.url"));
		dds.setUsername(env.getProperty("db.user"));
		dds.setPassword(env.getProperty("db.pass"));
		return dds;
	}
	
	@Bean(name="dataSource", destroyMethod="shutdown")
	@Profile("test")
	public DataSource dataSourceForTest() {
		return new EmbeddedDatabaseBuilder()
				.generateUniqueName(true)
				.setType(EmbeddedDatabaseType.H2)
				.setScriptEncoding("UTF-8")
				.ignoreFailedDrops(true)
				.build();
	}	
}
