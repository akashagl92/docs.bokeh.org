(function() {
  var fn = function() {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force === true) {
        window._bokeh_onload_callbacks = [];
        window._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        try {
          window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete window._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        window._bokeh_onload_callbacks.push(callback);
        if (window._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        window._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            window._bokeh_is_loading--;
            if (window._bokeh_is_loading === 0) {
              console.log("Bokeh: all BokehJS libraries loaded");
              run_callbacks()
            }
          };
          s.onerror = function() {
            console.warn("failed to load library " + url);
          };
          console.log("Bokeh: injecting script tag for BokehJS library: ", url);
          document.getElementsByTagName("head")[0].appendChild(s);
        }
      };var element = document.getElementById("57ab2519-ee02-429c-9d5f-493a643badc6");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '57ab2519-ee02-429c-9d5f-493a643badc6' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                var docs_json = {"f353696d-d7a2-4a66-b75f-d562cc713199":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["text"],"data":{"text":["circle / o"]}},"id":"291f92c1-1ea1-498f-b4f4-9d1d834b5e6f","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"orange"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"404a346b-349f-4768-8ada-0c0220c7daa9","type":"CircleCross"},{"attributes":{"callback":null},"id":"7c542ed9-91c1-4f43-88d6-42a5e49aa5c4","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"20594f6b-ab92-482e-8b7c-0525538bf242","type":"SquareX"},{"attributes":{"callback":null,"column_names":["text"],"data":{"text":["circle_x / ox"]}},"id":"c12e24c4-7251-441b-853a-6a45f4f4a3fc","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"d4ad0fe0-12ef-48cf-9bdb-0dbc50bd8e48","subtype":"Figure","type":"Plot"}},"id":"a4df462f-d1c2-4627-ac7c-f3cde426908c","type":"ResetTool"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":{"__ndarray__":"/m+z0PazE0DJRsL5KDcTQPwjQ9rQwBFAQMjPa3nQEUAZH057dsITQFkmPWqalRFAhx0g49RMEED2V6h/PAgSQBlJqlou4BFAvhSbX96cE0A=","dtype":"float64","shape":[10]},"y":{"__ndarray__":"7HQRKvEo9j8Pwnd6g7L4P9yh0UPHTfM/v8HbEo1a+z+21V3S0I//P5hGiRGw9fk/hh3odw4r/T/KSnrlgtz1P5aB7ekYkv0/ZjSQ8kfP/D8=","dtype":"float64","shape":[10]}}},"id":"f1ad4ccb-1351-49cd-b56e-419a62813a79","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["text"],"data":{"text":["inverted_triangle"]}},"id":"c8212440-9085-49c8-a6a0-fc5aa15c28de","type":"ColumnDataSource"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"value":4.5},"y":{"value":6.5}},"id":"871a52fa-b89a-4339-8e6b-368792c37afe","type":"Text"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":{"__ndarray__":"2UBAgzj3EEBk9sIsQmwQQFpfbqJqexBA0Enk5xKYE0Aar7+QIAISQMIItrVWPxFAbbFhYdTrE0CucuL+4l4TQFBFqx0WQxJAusSjv0+SEUA=","dtype":"float64","shape":[10]},"y":{"__ndarray__":"rfbmha1IEUB0L1S/Pn0SQLZOo0FkixFAiYIsOiSiEkBb5ahlE/8QQIB6hkUROBBANLUya247EUCyvhtpbJMSQGShXU57ZBBARvc5McJ5EUA=","dtype":"float64","shape":[10]}}},"id":"8da6aa82-7738-41b9-bc1b-2db9571a3495","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"orange"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"643e82a6-483c-4153-b3f0-303ca0871ec4","type":"Square"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"99e7f7ef-8574-44ea-92e7-ae462a44ef2e","type":"Diamond"},{"attributes":{"data_source":{"id":"c5204a84-a23d-4d23-b4c4-c484b59aba21","type":"ColumnDataSource"},"glyph":{"id":"c522c0e4-f8a9-43e3-bc21-3e2ce9a894c2","type":"InvertedTriangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19e67586-d203-4955-9970-d9e061c20185","type":"InvertedTriangle"},"selection_glyph":null},"id":"22f4b65d-b0e8-4e22-8297-52473ecb84fd","type":"GlyphRenderer"},{"attributes":{"text_align":"center","text_color":{"value":"firebrick"},"text_font_size":{"value":"10pt"},"x":{"value":6.5},"y":{"value":0.5}},"id":"4307b15d-2c2b-4ed4-9f10-edaf3ed262bd","type":"Text"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"value":4.5},"y":{"value":0.5}},"id":"fa8e1943-1ad7-4d52-9f09-90dcb49bdde8","type":"Text"},{"attributes":{"callback":null,"column_names":["text"],"data":{"text":["circle_cross / o+"]}},"id":"cd81ccdb-377b-4b17-babc-445b66d1fcda","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"0ea1b904-2b55-4ffd-a8f7-39728cd27976","type":"BasicTickFormatter"},"plot":{"id":"d4ad0fe0-12ef-48cf-9bdb-0dbc50bd8e48","subtype":"Figure","type":"Plot"},"ticker":{"id":"10c6e43c-34d0-465d-aa64-5a7c4c0bf26b","type":"BasicTicker"},"visible":false},"id":"a71cd2a3-15fd-470f-8228-b57e199b77bb","type":"LinearAxis"},{"attributes":{"text_align":"center","text_color":{"value":"firebrick"},"text_font_size":{"value":"10pt"},"x":{"value":4.5},"y":{"value":6.5}},"id":"bff6c111-7a6b-4454-8d80-c95ba75a9f6a","type":"Text"},{"attributes":{"data_source":{"id":"9ad75903-ffc4-46be-ab82-38cc94acd289","type":"ColumnDataSource"},"glyph":{"id":"4307b15d-2c2b-4ed4-9f10-edaf3ed262bd","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5cb11d1d-4654-44ef-a466-54946fbb1a27","type":"Text"},"selection_glyph":null},"id":"cbf49704-272d-45dc-919f-41df5c863f02","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"459cf9a4-276e-46a4-9839-6d40b068d51a","type":"ColumnDataSource"},"glyph":{"id":"06dccfe6-ba00-4f8c-88e8-81bb0fee1c1e","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"0426c41d-11ca-4021-92ac-74f747ee8b5a","type":"Text"},"selection_glyph":null},"id":"b6a6f3b1-88c7-4859-871c-ce2ba5e6494f","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["text"],"data":{"text":["square"]}},"id":"bc2d0989-481d-45c7-bc4a-58ad853ce96d","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"b6dde512-70c3-4ed6-a024-fb1f8349b06f","type":"ColumnDataSource"},"glyph":{"id":"707bdc0d-fb38-43b1-bd30-f30f2a31144b","type":"Cross"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"013fa4b5-0839-43e3-b2b0-6194ab8094a9","type":"Cross"},"selection_glyph":null},"id":"1f6adeaf-5051-4181-b39e-d1990bd02af4","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":{"__ndarray__":"n4wdOsmoIUAbfFQ1slYgQJ37FNgpCCFAMlcIZYwWIEDkSfBLZ/0gQCilPLLhKyBAWMXFd6c/IUDqcBIYiZMgQDGRRbjMwyFAqmVScpRyIUA=","dtype":"float64","shape":[10]},"y":{"__ndarray__":"7COlfo1vE0DMBzLjuuwSQIQyHDFC1BBAfOYB5ccrEkCA+DIhiL0TQP6bd5HJ7xFA6Ip8pGhWEEA5xI9QrwwTQOJKXomVZRFA/GiiAHH5E0A=","dtype":"float64","shape":[10]}}},"id":"bfdb69d8-5376-4c7d-a545-a91cf04a2ba5","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"orange"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"a986bebd-91df-4284-bb88-b8b4ea80dab0","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"95bb12a3-bc95-45ef-b9f5-56692ae03d32","type":"Circle"},{"attributes":{"data_source":{"id":"eb3814df-ad0b-4d2c-bc10-0a7015d56aa6","type":"ColumnDataSource"},"glyph":{"id":"92d27a2d-5ffc-4b7a-8d69-79f5eebe57e8","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"26833ef6-f65e-4add-87fd-657ab9097a6e","type":"Triangle"},"selection_glyph":null},"id":"0ff9725f-8701-4e8f-bf77-67828b9c9762","type":"GlyphRenderer"},{"attributes":{},"id":"bbbb2ccb-dac4-48dc-b9e6-e22b03a7474a","type":"ToolEvents"},{"attributes":{"data_source":{"id":"fe560df8-23b1-494a-87aa-b3f37a665cca","type":"ColumnDataSource"},"glyph":{"id":"91a0e32e-c336-4179-a776-f8b52a70bb5f","type":"SquareCross"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5611b7ef-0fb7-46fb-bba5-c76e1b008cec","type":"SquareCross"},"selection_glyph":null},"id":"a81e35df-a2d4-490b-b5df-b802a96f2b2d","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"d8625e8c-987a-4edc-b1db-44314c112526","type":"CircleX"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":{"__ndarray__":"ZmwEeFkVIUAMb4J25l8gQNGGKUbQYiBAbIvFyrwkIEApaMYQeuEhQIW0he/iBSBAMy9up8waIUDEoKFbl8MgQFUOuO5kMCFAKciuf9OMIEA=","dtype":"float64","shape":[10]},"y":{"__ndarray__":"YcW9xlwgHkChnI1tV1QfQIMoyw+r6h5AKuW9V7LSHkA7a9XKF+keQCQ3Zm3KlhxAURyfHtr3H0DDWzBvQSQcQGRNxri0Sx1Alpbq5sGiHEA=","dtype":"float64","shape":[10]}}},"id":"b6dde512-70c3-4ed6-a024-fb1f8349b06f","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":"Bokeh Markers"},"id":"50870c37-777f-41cd-86d1-6e7d4ef6d51a","type":"Title"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"value":6.5},"y":{"value":3.5}},"id":"ceabbda5-fc98-4481-949d-95e0cd3cb15d","type":"Text"},{"attributes":{"background_fill_color":{"value":"#eeeeee"},"below":[{"id":"97c67032-a553-461f-9171-2a9029ab743a","type":"LinearAxis"}],"left":[{"id":"a71cd2a3-15fd-470f-8228-b57e199b77bb","type":"LinearAxis"}],"renderers":[{"id":"97c67032-a553-461f-9171-2a9029ab743a","type":"LinearAxis"},{"id":"e1604df0-7724-4197-992a-32d4fc49b677","type":"Grid"},{"id":"a71cd2a3-15fd-470f-8228-b57e199b77bb","type":"LinearAxis"},{"id":"16594cf7-4d0b-420f-b12e-3a37de0ec8d7","type":"Grid"},{"id":"0c43c20b-9a37-400f-8ac0-d67b5d166aba","type":"BoxAnnotation"},{"id":"6bc7f6ee-3c29-4af2-9a9c-466da5b75098","type":"GlyphRenderer"},{"id":"ed4a4326-a101-48a5-81f2-656f1b69a900","type":"GlyphRenderer"},{"id":"0ff9725f-8701-4e8f-bf77-67828b9c9762","type":"GlyphRenderer"},{"id":"0ec6c46b-0909-4f93-afcd-9b1d701e873c","type":"GlyphRenderer"},{"id":"aae1b6f8-9089-4176-ae0f-2dcb1b8fca41","type":"GlyphRenderer"},{"id":"49008303-95dc-45b9-ab01-361435589184","type":"GlyphRenderer"},{"id":"22f4b65d-b0e8-4e22-8297-52473ecb84fd","type":"GlyphRenderer"},{"id":"d314e639-a1a2-4735-b32c-65152fce2f2a","type":"GlyphRenderer"},{"id":"a65d700f-1a1f-4048-b482-2a1cd0d0ade9","type":"GlyphRenderer"},{"id":"a81e35df-a2d4-490b-b5df-b802a96f2b2d","type":"GlyphRenderer"},{"id":"d4f3d2ee-8e62-4e86-8aa5-fa3de855e8b6","type":"GlyphRenderer"},{"id":"1f6adeaf-5051-4181-b39e-d1990bd02af4","type":"GlyphRenderer"},{"id":"9edbb481-3a12-496a-8d42-ca162bb0d0e4","type":"GlyphRenderer"},{"id":"7b781ebf-29aa-4faa-9448-2cefaa9cec82","type":"GlyphRenderer"},{"id":"cbf49704-272d-45dc-919f-41df5c863f02","type":"GlyphRenderer"},{"id":"6f398412-adc7-48c8-8757-b0218429ab45","type":"GlyphRenderer"},{"id":"e7c7b56a-f0dd-41aa-b3a5-82c1ee6357f5","type":"GlyphRenderer"},{"id":"95997846-0fe7-4c34-8bd3-2b619a4370a4","type":"GlyphRenderer"},{"id":"90721b36-9bca-45e5-ac4f-3f1560dfe898","type":"GlyphRenderer"},{"id":"2fe83fb2-162b-4b04-a206-b4141b0e0a05","type":"GlyphRenderer"},{"id":"1e2bc830-acbe-4cfd-97c3-cfbeb8d4d30a","type":"GlyphRenderer"},{"id":"ad249ebe-2fb2-4a95-be78-6dd8dcdc1218","type":"GlyphRenderer"},{"id":"62488bcc-c7a4-4227-982a-4618d435a8ec","type":"GlyphRenderer"},{"id":"b6a6f3b1-88c7-4859-871c-ce2ba5e6494f","type":"GlyphRenderer"}],"title":{"id":"50870c37-777f-41cd-86d1-6e7d4ef6d51a","type":"Title"},"tool_events":{"id":"bbbb2ccb-dac4-48dc-b9e6-e22b03a7474a","type":"ToolEvents"},"toolbar":{"id":"d7d4206c-b4de-487b-8412-232304423b23","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"7c542ed9-91c1-4f43-88d6-42a5e49aa5c4","type":"DataRange1d"},"x_scale":{"id":"c216fcbd-5778-4a0a-ab7e-d03c1cd190e4","type":"LinearScale"},"y_range":{"id":"87d59df4-34e5-4e2c-8cb6-c9dd8c03025e","type":"DataRange1d"},"y_scale":{"id":"a413b82a-dea4-474c-a59d-534873902aea","type":"LinearScale"}},"id":"d4ad0fe0-12ef-48cf-9bdb-0dbc50bd8e48","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"49415ebc-d488-4aed-ad89-bc92fe3db830","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"26833ef6-f65e-4add-87fd-657ab9097a6e","type":"Triangle"},{"attributes":{"text_align":"center","text_color":{"value":"firebrick"},"text_font_size":{"value":"10pt"},"x":{"value":6.5},"y":{"value":3.5}},"id":"70f7cec1-e67b-4a50-a1e2-51b366567558","type":"Text"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"013fa4b5-0839-43e3-b2b0-6194ab8094a9","type":"Cross"},{"attributes":{"data_source":{"id":"59ade8fa-8c06-4598-8e9b-ae1891515a1e","type":"ColumnDataSource"},"glyph":{"id":"404a346b-349f-4768-8ada-0c0220c7daa9","type":"CircleCross"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2f73162f-ed78-4e42-8e4e-728bf857d7d7","type":"CircleCross"},"selection_glyph":null},"id":"a65d700f-1a1f-4048-b482-2a1cd0d0ade9","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"55627464-cfbc-4124-8792-8eea2e0b0404","type":"ColumnDataSource"},"glyph":{"id":"bff6c111-7a6b-4454-8d80-c95ba75a9f6a","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"871a52fa-b89a-4339-8e6b-368792c37afe","type":"Text"},"selection_glyph":null},"id":"ad249ebe-2fb2-4a95-be78-6dd8dcdc1218","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":{"__ndarray__":"kex4GTepAED2WPJawZAHQLLtJz5hGQZA3H2j1MrGAEDkhwU5LzYBQKFFvnU6VQZAk9BUfDLHA0AmhH1wn6IHQINoZFvN9wBASpfIu0O6AUA=","dtype":"float64","shape":[10]},"y":{"__ndarray__":"sx11hnG3EECbThDzdNUTQHscIAmJLRBAXxvr4qRME0CYgBLxuXsTQMrZBzca5xJAY9JKWMnOEEDqYjEPuZAQQFLpMvK4HRJA8T9nj0xGEUA=","dtype":"float64","shape":[10]}}},"id":"d56d8aa0-134b-406e-aa01-eca9cc02dbe1","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":{"__ndarray__":"wgyvpqnEEEAYodQE7ZAQQPmlMNX+WhJAzv0mQShKEUDhACaT2HYQQF3BLJ31XxNAklF9BG/7EEDS3IHBZCYSQBkrWmV6ohNA1OgUs77lEUA=","dtype":"float64","shape":[10]},"y":{"__ndarray__":"R/rndnzxHUBuauAp/7keQHKMJXd7uR1AsCS3sPaVHkAXLvNeePQcQNE4RFPJhh1A+hpeQpsRHUAKnFE9GescQC92IQBA8B1AiMUfLN/SHUA=","dtype":"float64","shape":[10]}}},"id":"fe560df8-23b1-494a-87aa-b3f37a665cca","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":{"__ndarray__":"fiiik/IdGEAXBJndn38ZQFSnDbsh8BlAUCRLMcMdG0CXSle2npoaQO/G7cZMHhhAKImus4pGGkAVBPM3TxEZQCNrRY7xAhhAe3UrNjMQGUA=","dtype":"float64","shape":[10]},"y":{"__ndarray__":"aBP1BGJgEUDtyKDZxR0RQF/tsk4upRBAN601PL2oE0CqnD0axroRQEgZYOnGKBJAKzQMI0+BEkAo5oB9H1wSQO3yFUsn3BJANE26X66DEEA=","dtype":"float64","shape":[10]}}},"id":"c5204a84-a23d-4d23-b4c4-c484b59aba21","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":{"__ndarray__":"ViJ+OjmUIED0E8QddY8gQFUVr37K4iBAXyRk8tEAIEAF1PIHoAwgQIpVL/OKxSBAHgc5gYGwIECvrXJHhUIgQIopKfNouCFAFOYgH2HOIUA=","dtype":"float64","shape":[10]},"y":{"__ndarray__":"dr9xJ3w9+D8UMEBbfGD8PzohOwTzKvA/FDizP1d88D9yfGjBKtfyP0YxNO6PV/Y/E+LR0v/58T/g9qdv9Lv1P1bZzSVNqvo/q1LsJN7F+D8=","dtype":"float64","shape":[10]}}},"id":"fdc323ad-9796-4112-a8fc-eb9e7570b0dc","type":"ColumnDataSource"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"d4ad0fe0-12ef-48cf-9bdb-0dbc50bd8e48","subtype":"Figure","type":"Plot"},"ticker":{"id":"49415ebc-d488-4aed-ad89-bc92fe3db830","type":"BasicTicker"}},"id":"e1604df0-7724-4197-992a-32d4fc49b677","type":"Grid"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"value":2.5},"y":{"value":6.5}},"id":"7f2b282c-9582-4942-b371-df22ccecb1fd","type":"Text"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"orange"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"1d7c0391-ac79-4da6-bc8c-808cd9c49024","type":"CircleX"},{"attributes":{"data_source":{"id":"cd81ccdb-377b-4b17-babc-445b66d1fcda","type":"ColumnDataSource"},"glyph":{"id":"7ae9742f-613d-4024-9ba7-95d9f73fc96a","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7f2b282c-9582-4942-b371-df22ccecb1fd","type":"Text"},"selection_glyph":null},"id":"1e2bc830-acbe-4cfd-97c3-cfbeb8d4d30a","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"orange"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"997eaee5-310e-49fa-add8-a42bd1a4b6f2","type":"X"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":{"__ndarray__":"zCV9h9mnGkBQhMHrmlkYQIhSf8weXRhAAChd+Z/gGkDM/b7FzhcZQC0fJN9EzRpAWtAAG52NGUBh1FJMtgAbQL58xayUhxlAdEe7xsJkGkA=","dtype":"float64","shape":[10]},"y":{"__ndarray__":"n1UIaFTG8j/o5pjQwe7+P1s3NJ04rfk/0OnhDzVm9T9ORm4a4A7+Pzn/WPDFYPo/wImHwDs38z9oP2vOSx32P3CtVS0XHfk/L6Nnn/f/8T8=","dtype":"float64","shape":[10]}}},"id":"eb3814df-ad0b-4d2c-bc10-0a7015d56aa6","type":"ColumnDataSource"},{"attributes":{},"id":"a413b82a-dea4-474c-a59d-534873902aea","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"orange"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"dc2930da-fa62-4815-a3ab-c0eb796e1c67","type":"SquareX"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"value":8.5},"y":{"value":3.5}},"id":"683e32a1-27a3-4dec-9f8d-b794186cc6aa","type":"Text"},{"attributes":{"text_align":"center","text_color":{"value":"firebrick"},"text_font_size":{"value":"10pt"},"x":{"value":4.5},"y":{"value":0.5}},"id":"ede73f2e-1264-473e-ad9e-9cefe40894ad","type":"Text"},{"attributes":{"data_source":{"id":"58f55ace-3323-42ab-b5ae-6a83c5e39c16","type":"ColumnDataSource"},"glyph":{"id":"0e882afd-050d-4c8e-8c3a-7016fef322d7","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3c863b1e-98d2-4502-a884-788ce7ee3316","type":"Text"},"selection_glyph":null},"id":"62488bcc-c7a4-4227-982a-4618d435a8ec","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"2f73162f-ed78-4e42-8e4e-728bf857d7d7","type":"CircleCross"},{"attributes":{"callback":null,"column_names":["text"],"data":{"text":["cross / +"]}},"id":"459cf9a4-276e-46a4-9839-6d40b068d51a","type":"ColumnDataSource"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"value":2.5},"y":{"value":0.5}},"id":"04505f26-f6b4-420d-ab40-6a6d959bd437","type":"Text"},{"attributes":{"data_source":{"id":"e713978a-21f4-4ea0-bd55-758319931707","type":"ColumnDataSource"},"glyph":{"id":"a986bebd-91df-4284-bb88-b8b4ea80dab0","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"95bb12a3-bc95-45ef-b9f5-56692ae03d32","type":"Circle"},"selection_glyph":null},"id":"6bc7f6ee-3c29-4af2-9a9c-466da5b75098","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"0c43c20b-9a37-400f-8ac0-d67b5d166aba","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"bfdb69d8-5376-4c7d-a545-a91cf04a2ba5","type":"ColumnDataSource"},"glyph":{"id":"997eaee5-310e-49fa-add8-a42bd1a4b6f2","type":"X"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"829c71f1-5b82-4b9a-8469-eb752ff43485","type":"X"},"selection_glyph":null},"id":"d314e639-a1a2-4735-b32c-65152fce2f2a","type":"GlyphRenderer"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"value":8.5},"y":{"value":6.5}},"id":"0426c41d-11ca-4021-92ac-74f747ee8b5a","type":"Text"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"orange"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"d222f24a-4a66-46fe-b2d7-01f95679f2c8","type":"Diamond"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"value":6.5},"y":{"value":0.5}},"id":"5cb11d1d-4654-44ef-a466-54946fbb1a27","type":"Text"},{"attributes":{"data_source":{"id":"40488f44-0fda-4c3f-81f4-9f09d17de7bb","type":"ColumnDataSource"},"glyph":{"id":"d222f24a-4a66-46fe-b2d7-01f95679f2c8","type":"Diamond"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"99e7f7ef-8574-44ea-92e7-ae462a44ef2e","type":"Diamond"},"selection_glyph":null},"id":"d4f3d2ee-8e62-4e86-8aa5-fa3de855e8b6","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"d4ad0fe0-12ef-48cf-9bdb-0dbc50bd8e48","subtype":"Figure","type":"Plot"}},"id":"924a27cc-c59e-42ed-bd9d-20aa38a05137","type":"WheelZoomTool"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"value":6.5},"y":{"value":6.5}},"id":"3c863b1e-98d2-4502-a884-788ce7ee3316","type":"Text"},{"attributes":{"text_align":"center","text_color":{"value":"firebrick"},"text_font_size":{"value":"10pt"},"x":{"value":4.5},"y":{"value":3.5}},"id":"280f96cf-de99-4945-a757-80980e4244cd","type":"Text"},{"attributes":{"text_align":"center","text_color":{"value":"firebrick"},"text_font_size":{"value":"10pt"},"x":{"value":2.5},"y":{"value":6.5}},"id":"7ae9742f-613d-4024-9ba7-95d9f73fc96a","type":"Text"},{"attributes":{},"id":"0ea1b904-2b55-4ffd-a8f7-39728cd27976","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"d56d8aa0-134b-406e-aa01-eca9cc02dbe1","type":"ColumnDataSource"},"glyph":{"id":"1d7c0391-ac79-4da6-bc8c-808cd9c49024","type":"CircleX"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d8625e8c-987a-4edc-b1db-44314c112526","type":"CircleX"},"selection_glyph":null},"id":"aae1b6f8-9089-4176-ae0f-2dcb1b8fca41","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"f1ad4ccb-1351-49cd-b56e-419a62813a79","type":"ColumnDataSource"},"glyph":{"id":"643e82a6-483c-4153-b3f0-303ca0871ec4","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"21fc7eda-f63d-4ed6-985f-7c73fa8db389","type":"Square"},"selection_glyph":null},"id":"ed4a4326-a101-48a5-81f2-656f1b69a900","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"829c71f1-5b82-4b9a-8469-eb752ff43485","type":"X"},{"attributes":{"plot":{"id":"d4ad0fe0-12ef-48cf-9bdb-0dbc50bd8e48","subtype":"Figure","type":"Plot"}},"id":"2d21c45e-42a7-4b18-906d-d18aaad3274a","type":"HelpTool"},{"attributes":{"text_align":"center","text_color":{"value":"firebrick"},"text_font_size":{"value":"10pt"},"x":{"value":2.5},"y":{"value":0.5}},"id":"53fcf0d4-dcaa-4f53-9a35-d7d47bd41855","type":"Text"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"orange"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"ab58ee7f-7b57-4a69-81ba-3dd7881ba0c8","type":"Asterisk"},{"attributes":{"plot":{"id":"d4ad0fe0-12ef-48cf-9bdb-0dbc50bd8e48","subtype":"Figure","type":"Plot"}},"id":"9931945d-b1ff-4d56-a964-e9d156b5e59c","type":"PanTool"},{"attributes":{"data_source":{"id":"c8212440-9085-49c8-a6a0-fc5aa15c28de","type":"ColumnDataSource"},"glyph":{"id":"70f7cec1-e67b-4a50-a1e2-51b366567558","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"ceabbda5-fc98-4481-949d-95e0cd3cb15d","type":"Text"},"selection_glyph":null},"id":"90721b36-9bca-45e5-ac4f-3f1560dfe898","type":"GlyphRenderer"},{"attributes":{"text_align":"center","text_color":{"value":"firebrick"},"text_font_size":{"value":"10pt"},"x":{"value":8.5},"y":{"value":0.5}},"id":"2895557e-c16b-4d05-ad59-dbe5afcadf80","type":"Text"},{"attributes":{"callback":null,"column_names":["text"],"data":{"text":["diamond"]}},"id":"58f55ace-3323-42ab-b5ae-6a83c5e39c16","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":{"__ndarray__":"TMnyRNOZGUCpnlafPNEbQMpHK23jMxhAUb0cDwN0GEBOWFBXSn4aQAYwdGO5TxhAZ57zyBlvGkCKSZbFuBEaQPmary4S5BtAl5AkYXr2GkA=","dtype":"float64","shape":[10]},"y":{"__ndarray__":"yYabVHfYH0AEI95yTjMdQL6A1RIvIR1Ams6n/aoNH0CYLYtYK5IdQHf0A4fRSRxAasGWa/p3H0Bbs4LZ2KocQO3r8gT3NB5A4IhmXsALHkA=","dtype":"float64","shape":[10]}}},"id":"40488f44-0fda-4c3f-81f4-9f09d17de7bb","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"9931945d-b1ff-4d56-a964-e9d156b5e59c","type":"PanTool"},{"id":"924a27cc-c59e-42ed-bd9d-20aa38a05137","type":"WheelZoomTool"},{"id":"40b6725e-491f-43b3-a99b-120c52233b25","type":"BoxZoomTool"},{"id":"5a6da8dd-c7af-49b3-b78c-fca7820bac5b","type":"SaveTool"},{"id":"a4df462f-d1c2-4627-ac7c-f3cde426908c","type":"ResetTool"},{"id":"2d21c45e-42a7-4b18-906d-d18aaad3274a","type":"HelpTool"}]},"id":"d7d4206c-b4de-487b-8412-232304423b23","type":"Toolbar"},{"attributes":{"formatter":{"id":"b8b2e005-0c3e-4581-925e-2ad4178e2d05","type":"BasicTickFormatter"},"plot":{"id":"d4ad0fe0-12ef-48cf-9bdb-0dbc50bd8e48","subtype":"Figure","type":"Plot"},"ticker":{"id":"49415ebc-d488-4aed-ad89-bc92fe3db830","type":"BasicTicker"},"visible":false},"id":"97c67032-a553-461f-9171-2a9029ab743a","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["text"],"data":{"text":["square_cross"]}},"id":"55627464-cfbc-4124-8792-8eea2e0b0404","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":{"__ndarray__":"Zmj89PDGB0DcfKsopEsEQOqo7KxnFwRAtOOZ90L6A0AGGq5r7QMDQELcw1sv0gdAbJkTzKBTBUDobfcz2+UDQGbWazDC3QdAyniFYSSpBUA=","dtype":"float64","shape":[10]},"y":{"__ndarray__":"UpW3aSMV9z9PuzJWDSL2PwZbFd/uL/g/yqNZazmG/z+aQ49RlLDxP/CVXzX7/fc/mlJbBmpg/T/uA9sVFO/2P7ZJ6pbRwvU/Aq3TtEcI9j8=","dtype":"float64","shape":[10]}}},"id":"e713978a-21f4-4ea0-bd55-758319931707","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"orange"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"92d27a2d-5ffc-4b7a-8d69-79f5eebe57e8","type":"Triangle"},{"attributes":{"data_source":{"id":"8da6aa82-7738-41b9-bc1b-2db9571a3495","type":"ColumnDataSource"},"glyph":{"id":"dc2930da-fa62-4815-a3ab-c0eb796e1c67","type":"SquareX"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"20594f6b-ab92-482e-8b7c-0525538bf242","type":"SquareX"},"selection_glyph":null},"id":"49008303-95dc-45b9-ab01-361435589184","type":"GlyphRenderer"},{"attributes":{},"id":"c216fcbd-5778-4a0a-ab7e-d03c1cd190e4","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"orange"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"91a0e32e-c336-4179-a776-f8b52a70bb5f","type":"SquareCross"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"orange"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"c522c0e4-f8a9-43e3-bc21-3e2ce9a894c2","type":"InvertedTriangle"},{"attributes":{},"id":"b8b2e005-0c3e-4581-925e-2ad4178e2d05","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"5611b7ef-0fb7-46fb-bba5-c76e1b008cec","type":"SquareCross"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":{"__ndarray__":"VGIvCPZPAUChSITR+TUGQPfYwgtPswBAnazYqZ4TAUA1MG9EN4gBQH9Zf5BkjgVAahw7HOv9BUCqPO7BnJACQN5t+ZsfDwRAVEP6F6idBEA=","dtype":"float64","shape":[10]},"y":{"__ndarray__":"ZZTW4ekbHkBoq/4G5LMfQCaFsn+dxh1AYtZ43ZpJH0DWugn5kQIeQJv6c/wmmR5AuIjJaizEHUAAJHXzwfQcQP4H+3+NQh9A5aFCxOBeHUA=","dtype":"float64","shape":[10]}}},"id":"59ade8fa-8c06-4598-8e9b-ae1891515a1e","type":"ColumnDataSource"},{"attributes":{"text_align":"center","text_color":{"value":"firebrick"},"text_font_size":{"value":"10pt"},"x":{"value":8.5},"y":{"value":3.5}},"id":"d3a0e49d-ad4a-445b-8151-67569daf0204","type":"Text"},{"attributes":{"data_source":{"id":"f55d2089-cd99-4d3e-bc7f-e371752903c2","type":"ColumnDataSource"},"glyph":{"id":"280f96cf-de99-4945-a757-80980e4244cd","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5c0bcb4a-11ff-4a79-bbe9-b23a3b4f8e38","type":"Text"},"selection_glyph":null},"id":"95997846-0fe7-4c34-8bd3-2b619a4370a4","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"ac6f2aa7-d977-4f31-bc94-2e06c4239a67","type":"ColumnDataSource"},"glyph":{"id":"d3a0e49d-ad4a-445b-8151-67569daf0204","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"683e32a1-27a3-4dec-9f8d-b794186cc6aa","type":"Text"},"selection_glyph":null},"id":"2fe83fb2-162b-4b04-a206-b4141b0e0a05","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"c12e24c4-7251-441b-853a-6a45f4f4a3fc","type":"ColumnDataSource"},"glyph":{"id":"384d6f30-6811-4a57-9fd1-5af94c7935bb","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d9b151b4-0475-4052-b50e-0d9318fb0cd9","type":"Text"},"selection_glyph":null},"id":"e7c7b56a-f0dd-41aa-b3a5-82c1ee6357f5","type":"GlyphRenderer"},{"attributes":{"text_align":"center","text_color":{"value":"firebrick"},"text_font_size":{"value":"10pt"},"x":{"value":2.5},"y":{"value":3.5}},"id":"384d6f30-6811-4a57-9fd1-5af94c7935bb","type":"Text"},{"attributes":{"data_source":{"id":"291f92c1-1ea1-498f-b4f4-9d1d834b5e6f","type":"ColumnDataSource"},"glyph":{"id":"53fcf0d4-dcaa-4f53-9a35-d7d47bd41855","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"04505f26-f6b4-420d-ab40-6a6d959bd437","type":"Text"},"selection_glyph":null},"id":"9edbb481-3a12-496a-8d42-ca162bb0d0e4","type":"GlyphRenderer"},{"attributes":{},"id":"10c6e43c-34d0-465d-aa64-5a7c4c0bf26b","type":"BasicTicker"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"value":8.5},"y":{"value":0.5}},"id":"460bd9db-c491-4c05-9a2c-6fa277045925","type":"Text"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"21fc7eda-f63d-4ed6-985f-7c73fa8db389","type":"Square"},{"attributes":{"callback":null,"column_names":["text"],"data":{"text":["square_x"]}},"id":"f55d2089-cd99-4d3e-bc7f-e371752903c2","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"5aada531-1286-4994-afad-f39f6a101042","type":"Asterisk"},{"attributes":{"data_source":{"id":"fdc323ad-9796-4112-a8fc-eb9e7570b0dc","type":"ColumnDataSource"},"glyph":{"id":"ab58ee7f-7b57-4a69-81ba-3dd7881ba0c8","type":"Asterisk"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5aada531-1286-4994-afad-f39f6a101042","type":"Asterisk"},"selection_glyph":null},"id":"0ec6c46b-0909-4f93-afcd-9b1d701e873c","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"bc2d0989-481d-45c7-bc4a-58ad853ce96d","type":"ColumnDataSource"},"glyph":{"id":"ede73f2e-1264-473e-ad9e-9cefe40894ad","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"fa8e1943-1ad7-4d52-9f09-90dcb49bdde8","type":"Text"},"selection_glyph":null},"id":"7b781ebf-29aa-4faa-9448-2cefaa9cec82","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["text"],"data":{"text":["triangle"]}},"id":"9ad75903-ffc4-46be-ab82-38cc94acd289","type":"ColumnDataSource"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"d4ad0fe0-12ef-48cf-9bdb-0dbc50bd8e48","subtype":"Figure","type":"Plot"},"ticker":{"id":"10c6e43c-34d0-465d-aa64-5a7c4c0bf26b","type":"BasicTicker"}},"id":"16594cf7-4d0b-420f-b12e-3a37de0ec8d7","type":"Grid"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"value":2.5},"y":{"value":3.5}},"id":"d9b151b4-0475-4052-b50e-0d9318fb0cd9","type":"Text"},{"attributes":{"callback":null,"column_names":["text"],"data":{"text":["x"]}},"id":"ac6f2aa7-d977-4f31-bc94-2e06c4239a67","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["text"],"data":{"text":["asterisk / *"]}},"id":"29e15c4f-865f-4347-ad71-78124c05827a","type":"ColumnDataSource"},{"attributes":{"text_align":"center","text_color":{"value":"firebrick"},"text_font_size":{"value":"10pt"},"x":{"value":8.5},"y":{"value":6.5}},"id":"06dccfe6-ba00-4f8c-88e8-81bb0fee1c1e","type":"Text"},{"attributes":{"data_source":{"id":"29e15c4f-865f-4347-ad71-78124c05827a","type":"ColumnDataSource"},"glyph":{"id":"2895557e-c16b-4d05-ad59-dbe5afcadf80","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"460bd9db-c491-4c05-9a2c-6fa277045925","type":"Text"},"selection_glyph":null},"id":"6f398412-adc7-48c8-8757-b0218429ab45","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"d4ad0fe0-12ef-48cf-9bdb-0dbc50bd8e48","subtype":"Figure","type":"Plot"}},"id":"5a6da8dd-c7af-49b3-b78c-fca7820bac5b","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"orange"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"707bdc0d-fb38-43b1-bd30-f30f2a31144b","type":"Cross"},{"attributes":{"overlay":{"id":"0c43c20b-9a37-400f-8ac0-d67b5d166aba","type":"BoxAnnotation"},"plot":{"id":"d4ad0fe0-12ef-48cf-9bdb-0dbc50bd8e48","subtype":"Figure","type":"Plot"}},"id":"40b6725e-491f-43b3-a99b-120c52233b25","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"87d59df4-34e5-4e2c-8cb6-c9dd8c03025e","type":"DataRange1d"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"value":4.5},"y":{"value":3.5}},"id":"5c0bcb4a-11ff-4a79-bbe9-b23a3b4f8e38","type":"Text"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"19e67586-d203-4955-9970-d9e061c20185","type":"InvertedTriangle"},{"attributes":{"text_align":"center","text_color":{"value":"firebrick"},"text_font_size":{"value":"10pt"},"x":{"value":6.5},"y":{"value":6.5}},"id":"0e882afd-050d-4c8e-8c3a-7016fef322d7","type":"Text"}],"root_ids":["d4ad0fe0-12ef-48cf-9bdb-0dbc50bd8e48"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"f353696d-d7a2-4a66-b75f-d562cc713199","elementid":"57ab2519-ee02-429c-9d5f-493a643badc6","modelid":"d4ad0fe0-12ef-48cf-9bdb-0dbc50bd8e48"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i](window.Bokeh);
        }
        
      }
    
      if (window._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(this));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();