(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (root._bokeh_onload_callbacks) === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete root._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            root._bokeh_is_loading--;
            if (root._bokeh_is_loading === 0) {
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
      };var element = document.getElementById("7157aad5-ab10-499c-a674-73f75964ab9b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '7157aad5-ab10-499c-a674-73f75964ab9b' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.15.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.15.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.15.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.15.min.js"];
    
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
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"8659427e-bed5-4330-85fa-523b75b48309":{"roots":{"references":[{"attributes":{},"id":"b7dc7183-4bda-4be8-a42f-2855d72e36f1","type":"CategoricalTickFormatter"},{"attributes":{"fields":["2015"]},"id":"89573e2b-d018-4fa2-9da2-d52a01688fc7","type":"Stack"},{"attributes":{"label":{"value":"2015 exports"},"renderers":[{"id":"d4b381ae-62d7-4c6a-89ef-fad540a5912c","type":"GlyphRenderer"}]},"id":"bf17948c-a29e-427b-a61b-0c3168ed63d0","type":"LegendItem"},{"attributes":{},"id":"74e8e1d1-23eb-48a0-885e-eb6bb347ddc4","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#e0f3db"},"height":{"value":0.9},"left":{"expr":{"id":"de6d591c-2cb5-4e74-8242-db22d74de01c","type":"Stack"}},"line_color":{"value":"#e0f3db"},"right":{"expr":{"id":"0d52f859-15f4-43e0-bd8f-eb139d8e2afb","type":"Stack"}},"y":{"field":"fruits"}},"id":"f120376d-002c-44cc-affd-5f4addea7e9e","type":"HBar"},{"attributes":{"fields":["2015","2016"]},"id":"de6d591c-2cb5-4e74-8242-db22d74de01c","type":"Stack"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"de6d591c-2cb5-4e74-8242-db22d74de01c","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"0d52f859-15f4-43e0-bd8f-eb139d8e2afb","type":"Stack"}},"y":{"field":"fruits"}},"id":"8258f1e6-1169-438c-bf3f-3362a1e9277a","type":"HBar"},{"attributes":{"source":{"id":"82496987-4d64-490f-b83a-c593ecd90cd3","type":"ColumnDataSource"}},"id":"17109e87-5c7d-4f79-889d-3e49800c1729","type":"CDSView"},{"attributes":{"items":[{"id":"bf17948c-a29e-427b-a61b-0c3168ed63d0","type":"LegendItem"},{"id":"0347e442-37d8-4bae-ac2b-d9f2b2750ce0","type":"LegendItem"},{"id":"6a42443a-d7c4-41ee-b7c5-471bf83e1479","type":"LegendItem"},{"id":"0e5efc35-3ed1-411f-b203-e540c91a0417","type":"LegendItem"},{"id":"c408b563-a172-4464-8263-208e9710bec8","type":"LegendItem"},{"id":"ec1423f4-891b-4195-9e5d-9e15f97c3e94","type":"LegendItem"}],"location":"top_left","plot":{"id":"239077ea-837c-41be-ba09-d3ff45e2ce57","subtype":"Figure","type":"Plot"}},"id":"9a31b45c-fdf4-4782-bc06-8f3ff9f1d669","type":"Legend"},{"attributes":{},"id":"49958766-e709-4f53-a08f-a0d0262b7f36","type":"CategoricalTicker"},{"attributes":{"fields":[]},"id":"3df505cc-916f-4042-bbc4-31abd65325b1","type":"Stack"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"9858c4d4-8697-4f7b-a73c-b799b6ba531c","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"70e30ea7-5e29-477a-b12a-b0f110b0fdc6","type":"Stack"}},"y":{"field":"fruits"}},"id":"43f3f6b3-387c-4ee5-aa22-779facb9d2a8","type":"HBar"},{"attributes":{"fill_color":{"value":"#a8ddb5"},"height":{"value":0.9},"left":{"expr":{"id":"9858c4d4-8697-4f7b-a73c-b799b6ba531c","type":"Stack"}},"line_color":{"value":"#a8ddb5"},"right":{"expr":{"id":"70e30ea7-5e29-477a-b12a-b0f110b0fdc6","type":"Stack"}},"y":{"field":"fruits"}},"id":"d479d2a7-947a-4e6c-b859-354cabf68c0f","type":"HBar"},{"attributes":{},"id":"eff39fc2-33cb-42ed-90c0-c6bb722e3f56","type":"BasicTicker"},{"attributes":{"label":{"value":"2016 exports"},"renderers":[{"id":"19bef27d-2d08-42c3-b4b8-6c5006da7598","type":"GlyphRenderer"}]},"id":"0347e442-37d8-4bae-ac2b-d9f2b2750ce0","type":"LegendItem"},{"attributes":{"data_source":{"id":"82496987-4d64-490f-b83a-c593ecd90cd3","type":"ColumnDataSource"},"glyph":{"id":"d479d2a7-947a-4e6c-b859-354cabf68c0f","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"43f3f6b3-387c-4ee5-aa22-779facb9d2a8","type":"HBar"},"selection_glyph":null,"view":{"id":"ec58d805-4fa0-41aa-8614-e83c718fea0d","type":"CDSView"}},"id":"19bef27d-2d08-42c3-b4b8-6c5006da7598","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"d3b1647e-e918-4ffb-826d-1505e5587743","type":"BoxAnnotation"},{"attributes":{"source":{"id":"82496987-4d64-490f-b83a-c593ecd90cd3","type":"ColumnDataSource"}},"id":"ec58d805-4fa0-41aa-8614-e83c718fea0d","type":"CDSView"},{"attributes":{"source":{"id":"82496987-4d64-490f-b83a-c593ecd90cd3","type":"ColumnDataSource"}},"id":"47e31872-d45e-46e6-a29c-19bc13a0a242","type":"CDSView"},{"attributes":{"data_source":{"id":"82496987-4d64-490f-b83a-c593ecd90cd3","type":"ColumnDataSource"},"glyph":{"id":"f120376d-002c-44cc-affd-5f4addea7e9e","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8258f1e6-1169-438c-bf3f-3362a1e9277a","type":"HBar"},"selection_glyph":null,"view":{"id":"47e31872-d45e-46e6-a29c-19bc13a0a242","type":"CDSView"}},"id":"0a7ecd39-fccd-4943-8eb8-b75812f069be","type":"GlyphRenderer"},{"attributes":{},"id":"a742ce7a-919b-4da5-b8d8-b7e521b59b6b","type":"SaveTool"},{"attributes":{"label":{"value":"2017 exports"},"renderers":[{"id":"0a7ecd39-fccd-4943-8eb8-b75812f069be","type":"GlyphRenderer"}]},"id":"6a42443a-d7c4-41ee-b7c5-471bf83e1479","type":"LegendItem"},{"attributes":{},"id":"17e79ca9-3d3a-4740-a971-8a2aa66e918d","type":"ResetTool"},{"attributes":{"fields":["2015","2016","2017"]},"id":"2bd534c6-3711-4117-abf6-a47e91fdf948","type":"Stack"},{"attributes":{"plot":null,"text":"Fruit import/export, by year"},"id":"7dba557c-d24e-4ffb-bcf6-efcb4f05acb0","type":"Title"},{"attributes":{"fields":["2015","2016"]},"id":"565149a2-e24a-4405-8460-b413e211c067","type":"Stack"},{"attributes":{"fields":["2015"]},"id":"ea99da25-72dd-43cb-832a-ad785c67591d","type":"Stack"},{"attributes":{"below":[{"id":"fbbf0cfe-27c8-407d-9c6c-9311048b3115","type":"LinearAxis"}],"left":[{"id":"64874225-27a1-41c9-a3bf-ea59c1c74e04","type":"CategoricalAxis"}],"outline_line_color":{"value":null},"plot_height":250,"renderers":[{"id":"fbbf0cfe-27c8-407d-9c6c-9311048b3115","type":"LinearAxis"},{"id":"be615345-3352-4212-8d23-1f84d1e814a4","type":"Grid"},{"id":"64874225-27a1-41c9-a3bf-ea59c1c74e04","type":"CategoricalAxis"},{"id":"e9311d8f-e298-4e5c-83ba-836c5005d3bf","type":"Grid"},{"id":"d3b1647e-e918-4ffb-826d-1505e5587743","type":"BoxAnnotation"},{"id":"9a31b45c-fdf4-4782-bc06-8f3ff9f1d669","type":"Legend"},{"id":"d4b381ae-62d7-4c6a-89ef-fad540a5912c","type":"GlyphRenderer"},{"id":"19bef27d-2d08-42c3-b4b8-6c5006da7598","type":"GlyphRenderer"},{"id":"0a7ecd39-fccd-4943-8eb8-b75812f069be","type":"GlyphRenderer"},{"id":"eb704ee2-481d-48b8-9009-9d4b6a7efbec","type":"GlyphRenderer"},{"id":"c71ae52c-7194-4301-8d11-534e3d750e75","type":"GlyphRenderer"},{"id":"1fcff6c7-bdef-499b-8a38-993c09b52537","type":"GlyphRenderer"}],"title":{"id":"7dba557c-d24e-4ffb-bcf6-efcb4f05acb0","type":"Title"},"toolbar":{"id":"d4101837-0ca6-484d-93a5-a92ff6c69bda","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"6710371a-8114-4041-9464-f803b8d80b38","type":"Range1d"},"x_scale":{"id":"91f0c3de-7ddf-4de7-8371-9e7a464905d0","type":"LinearScale"},"y_range":{"id":"e0a21e92-f388-40b9-b277-6311be17094a","type":"FactorRange"},"y_scale":{"id":"aae309ad-8345-4020-b946-39da6f7c2c7f","type":"CategoricalScale"}},"id":"239077ea-837c-41be-ba09-d3ff45e2ce57","subtype":"Figure","type":"Plot"},{"attributes":{"fields":["2015","2016"]},"id":"a01edac0-4ad3-4da7-b772-9e1c51ace997","type":"Stack"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"817543a9-36b5-4d9f-ad29-570d57d4c867","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"87e0b655-63d8-4c57-a9c8-b1b470002f34","type":"Stack"}},"y":{"field":"fruits"}},"id":"f38e709b-d908-4c86-a8f4-898b96d698ee","type":"HBar"},{"attributes":{"overlay":{"id":"d3b1647e-e918-4ffb-826d-1505e5587743","type":"BoxAnnotation"}},"id":"9592a539-bc20-42c3-a143-4c9aaeff3738","type":"BoxZoomTool"},{"attributes":{"fill_color":{"value":"#e34a33"},"height":{"value":0.9},"left":{"expr":{"id":"3df505cc-916f-4042-bbc4-31abd65325b1","type":"Stack"}},"line_color":{"value":"#e34a33"},"right":{"expr":{"id":"ea99da25-72dd-43cb-832a-ad785c67591d","type":"Stack"}},"y":{"field":"fruits"}},"id":"13c61552-7699-440a-8518-2b22a26e028a","type":"HBar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"3df505cc-916f-4042-bbc4-31abd65325b1","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"ea99da25-72dd-43cb-832a-ad785c67591d","type":"Stack"}},"y":{"field":"fruits"}},"id":"31cf34a6-7359-47d5-ac9d-987250b3057b","type":"HBar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"89573e2b-d018-4fa2-9da2-d52a01688fc7","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"a01edac0-4ad3-4da7-b772-9e1c51ace997","type":"Stack"}},"y":{"field":"fruits"}},"id":"0e9c0227-cb22-4d4b-9231-ebdb74d9ed0c","type":"HBar"},{"attributes":{"fields":[]},"id":"817543a9-36b5-4d9f-ad29-570d57d4c867","type":"Stack"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"565149a2-e24a-4405-8460-b413e211c067","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"2bd534c6-3711-4117-abf6-a47e91fdf948","type":"Stack"}},"y":{"field":"fruits"}},"id":"3f3668d4-f0a5-4eaf-8470-3a8d56fa406f","type":"HBar"},{"attributes":{"label":{"value":"2015 imports"},"renderers":[{"id":"eb704ee2-481d-48b8-9009-9d4b6a7efbec","type":"GlyphRenderer"}]},"id":"0e5efc35-3ed1-411f-b203-e540c91a0417","type":"LegendItem"},{"attributes":{"fill_color":{"value":"#fdbb84"},"height":{"value":0.9},"left":{"expr":{"id":"89573e2b-d018-4fa2-9da2-d52a01688fc7","type":"Stack"}},"line_color":{"value":"#fdbb84"},"right":{"expr":{"id":"a01edac0-4ad3-4da7-b772-9e1c51ace997","type":"Stack"}},"y":{"field":"fruits"}},"id":"57d073ab-3b2a-4530-bfb2-e55c1cb9f144","type":"HBar"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"d1b66c45-5742-426b-a9e2-d3775605ad10","type":"PanTool"},{"id":"5ec6e6af-ff78-4ff3-a039-dfd94bd0e419","type":"WheelZoomTool"},{"id":"9592a539-bc20-42c3-a143-4c9aaeff3738","type":"BoxZoomTool"},{"id":"a742ce7a-919b-4da5-b8d8-b7e521b59b6b","type":"SaveTool"},{"id":"17e79ca9-3d3a-4740-a971-8a2aa66e918d","type":"ResetTool"},{"id":"5cab3f6f-b22c-4212-9e3f-d38e7bb781ef","type":"HelpTool"}]},"id":"d4101837-0ca6-484d-93a5-a92ff6c69bda","type":"Toolbar"},{"attributes":{"data_source":{"id":"1fbe7556-62d3-48c4-a469-66267f78bbb4","type":"ColumnDataSource"},"glyph":{"id":"13c61552-7699-440a-8518-2b22a26e028a","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"31cf34a6-7359-47d5-ac9d-987250b3057b","type":"HBar"},"selection_glyph":null,"view":{"id":"0bd03ea4-891a-47e6-9dd7-6e73becd602a","type":"CDSView"}},"id":"eb704ee2-481d-48b8-9009-9d4b6a7efbec","type":"GlyphRenderer"},{"attributes":{"source":{"id":"1fbe7556-62d3-48c4-a469-66267f78bbb4","type":"ColumnDataSource"}},"id":"0bd03ea4-891a-47e6-9dd7-6e73becd602a","type":"CDSView"},{"attributes":{},"id":"91f0c3de-7ddf-4de7-8371-9e7a464905d0","type":"LinearScale"},{"attributes":{"fill_color":{"value":"#fee8c8"},"height":{"value":0.9},"left":{"expr":{"id":"565149a2-e24a-4405-8460-b413e211c067","type":"Stack"}},"line_color":{"value":"#fee8c8"},"right":{"expr":{"id":"2bd534c6-3711-4117-abf6-a47e91fdf948","type":"Stack"}},"y":{"field":"fruits"}},"id":"46acff55-89c9-4770-b3d7-a0d5e33e83ca","type":"HBar"},{"attributes":{"fields":["2015"]},"id":"9858c4d4-8697-4f7b-a73c-b799b6ba531c","type":"Stack"},{"attributes":{"label":{"value":"2016 imports"},"renderers":[{"id":"c71ae52c-7194-4301-8d11-534e3d750e75","type":"GlyphRenderer"}]},"id":"c408b563-a172-4464-8263-208e9710bec8","type":"LegendItem"},{"attributes":{"fields":["2015","2016","2017"]},"id":"0d52f859-15f4-43e0-bd8f-eb139d8e2afb","type":"Stack"},{"attributes":{"data_source":{"id":"82496987-4d64-490f-b83a-c593ecd90cd3","type":"ColumnDataSource"},"glyph":{"id":"e94aec6e-d778-405d-9d48-b8d931ee66d8","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f38e709b-d908-4c86-a8f4-898b96d698ee","type":"HBar"},"selection_glyph":null,"view":{"id":"17109e87-5c7d-4f79-889d-3e49800c1729","type":"CDSView"}},"id":"d4b381ae-62d7-4c6a-89ef-fad540a5912c","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"1fbe7556-62d3-48c4-a469-66267f78bbb4","type":"ColumnDataSource"},"glyph":{"id":"57d073ab-3b2a-4530-bfb2-e55c1cb9f144","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"0e9c0227-cb22-4d4b-9231-ebdb74d9ed0c","type":"HBar"},"selection_glyph":null,"view":{"id":"7b643ca2-537c-4ba8-ba8b-da77d9a51475","type":"CDSView"}},"id":"c71ae52c-7194-4301-8d11-534e3d750e75","type":"GlyphRenderer"},{"attributes":{"source":{"id":"1fbe7556-62d3-48c4-a469-66267f78bbb4","type":"ColumnDataSource"}},"id":"7b643ca2-537c-4ba8-ba8b-da77d9a51475","type":"CDSView"},{"attributes":{"label":{"value":"2017 imports"},"renderers":[{"id":"1fcff6c7-bdef-499b-8a38-993c09b52537","type":"GlyphRenderer"}]},"id":"ec1423f4-891b-4195-9e5d-9e15f97c3e94","type":"LegendItem"},{"attributes":{},"id":"5cab3f6f-b22c-4212-9e3f-d38e7bb781ef","type":"HelpTool"},{"attributes":{"data_source":{"id":"1fbe7556-62d3-48c4-a469-66267f78bbb4","type":"ColumnDataSource"},"glyph":{"id":"46acff55-89c9-4770-b3d7-a0d5e33e83ca","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3f3668d4-f0a5-4eaf-8470-3a8d56fa406f","type":"HBar"},"selection_glyph":null,"view":{"id":"e0000e8d-37b7-4464-b636-5703774a74bc","type":"CDSView"}},"id":"1fcff6c7-bdef-499b-8a38-993c09b52537","type":"GlyphRenderer"},{"attributes":{"source":{"id":"1fbe7556-62d3-48c4-a469-66267f78bbb4","type":"ColumnDataSource"}},"id":"e0000e8d-37b7-4464-b636-5703774a74bc","type":"CDSView"},{"attributes":{"fill_color":{"value":"#43a2ca"},"height":{"value":0.9},"left":{"expr":{"id":"817543a9-36b5-4d9f-ad29-570d57d4c867","type":"Stack"}},"line_color":{"value":"#43a2ca"},"right":{"expr":{"id":"87e0b655-63d8-4c57-a9c8-b1b470002f34","type":"Stack"}},"y":{"field":"fruits"}},"id":"e94aec6e-d778-405d-9d48-b8d931ee66d8","type":"HBar"},{"attributes":{"plot":{"id":"239077ea-837c-41be-ba09-d3ff45e2ce57","subtype":"Figure","type":"Plot"},"ticker":{"id":"eff39fc2-33cb-42ed-90c0-c6bb722e3f56","type":"BasicTicker"}},"id":"be615345-3352-4212-8d23-1f84d1e814a4","type":"Grid"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"239077ea-837c-41be-ba09-d3ff45e2ce57","subtype":"Figure","type":"Plot"},"ticker":{"id":"49958766-e709-4f53-a08f-a0d0262b7f36","type":"CategoricalTicker"}},"id":"e9311d8f-e298-4e5c-83ba-836c5005d3bf","type":"Grid"},{"attributes":{},"id":"aae309ad-8345-4020-b946-39da6f7c2c7f","type":"CategoricalScale"},{"attributes":{"fields":["2015"]},"id":"87e0b655-63d8-4c57-a9c8-b1b470002f34","type":"Stack"},{"attributes":{"callback":null,"column_names":["fruits","2015","2016","2017"],"data":{"2015":[-1,0,-1,-3,-2,-1],"2016":[-2,-1,-3,-1,-2,-2],"2017":[-1,-2,-1,0,-2,-2],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":null,"selection_policy":null},"id":"1fbe7556-62d3-48c4-a469-66267f78bbb4","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"b7dc7183-4bda-4be8-a42f-2855d72e36f1","type":"CategoricalTickFormatter"},"minor_tick_line_color":{"value":null},"plot":{"id":"239077ea-837c-41be-ba09-d3ff45e2ce57","subtype":"Figure","type":"Plot"},"ticker":{"id":"49958766-e709-4f53-a08f-a0d0262b7f36","type":"CategoricalTicker"}},"id":"64874225-27a1-41c9-a3bf-ea59c1c74e04","type":"CategoricalAxis"},{"attributes":{},"id":"d1b66c45-5742-426b-a9e2-d3775605ad10","type":"PanTool"},{"attributes":{"callback":null,"end":16,"start":-16},"id":"6710371a-8114-4041-9464-f803b8d80b38","type":"Range1d"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"],"range_padding":0.1},"id":"e0a21e92-f388-40b9-b277-6311be17094a","type":"FactorRange"},{"attributes":{"formatter":{"id":"74e8e1d1-23eb-48a0-885e-eb6bb347ddc4","type":"BasicTickFormatter"},"minor_tick_line_color":{"value":null},"plot":{"id":"239077ea-837c-41be-ba09-d3ff45e2ce57","subtype":"Figure","type":"Plot"},"ticker":{"id":"eff39fc2-33cb-42ed-90c0-c6bb722e3f56","type":"BasicTicker"}},"id":"fbbf0cfe-27c8-407d-9c6c-9311048b3115","type":"LinearAxis"},{"attributes":{},"id":"5ec6e6af-ff78-4ff3-a039-dfd94bd0e419","type":"WheelZoomTool"},{"attributes":{"fields":["2015","2016"]},"id":"70e30ea7-5e29-477a-b12a-b0f110b0fdc6","type":"Stack"},{"attributes":{"callback":null,"column_names":["fruits","2015","2016","2017"],"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,4,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":null,"selection_policy":null},"id":"82496987-4d64-490f-b83a-c593ecd90cd3","type":"ColumnDataSource"}],"root_ids":["239077ea-837c-41be-ba09-d3ff45e2ce57"]},"title":"Bokeh Application","version":"0.12.15"}}';
                  var render_items = [{"docid":"8659427e-bed5-4330-85fa-523b75b48309","elementid":"7157aad5-ab10-499c-a674-73f75964ab9b","modelid":"239077ea-837c-41be-ba09-d3ff45e2ce57"}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        embed_document(root);
                        clearInterval(timer);
                      }
                      attempts++;
                      if (attempts > 100) {
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing")
                        clearInterval(timer);
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.15.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.15.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.15.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.15.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.15.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.15.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();