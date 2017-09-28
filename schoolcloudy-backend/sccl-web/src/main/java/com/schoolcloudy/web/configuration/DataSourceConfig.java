package com.schoolcloudy.web.configuration;

import javax.annotation.PostConstruct;
import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.context.annotation.Profile;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseBuilder;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseType;
import org.springframework.jdbc.datasource.init.DataSourceInitializer;
import org.springframework.jdbc.datasource.init.DatabasePopulatorUtils;
import org.springframework.jdbc.datasource.init.ResourceDatabasePopulator;

@Configuration
@PropertySource("classpath:/database_access.properties")
@Import(BusinessConfiguration.class)
public class DataSourceConfig {
	
	@Autowired
	private Environment env;
	
	@Autowired
	private ResourceLoader resourceLoader;
	
	/*
	@PostConstruct
	protected void initialize() {
		ResourceDatabasePopulator populator = new ResourceDatabasePopulator();
		populator.addScript(resourceLoader.getResource(env.getProperty("data.sql")));
		populator.setContinueOnError(true);
		DatabasePopulatorUtils.execute(populator , dataSourceForProd());
	}*/
	
	@Bean
    public DataSourceInitializer dataSourceInitializer() {
    ResourceDatabasePopulator resourceDatabasePopulator = new ResourceDatabasePopulator();
    resourceDatabasePopulator.addScript(new ClassPathResource("/data.sql"));

    DataSourceInitializer dataSourceInitializer = new DataSourceInitializer();
    dataSourceInitializer.setDataSource(dataSourceForProd());
    dataSourceInitializer.setDatabasePopulator(resourceDatabasePopulator);
    return dataSourceInitializer;
}
	
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
