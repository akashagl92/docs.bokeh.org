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
      };var element = document.getElementById("fccde4d7-dc2c-4112-996b-59f6ca462df8");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'fccde4d7-dc2c-4112-996b-59f6ca462df8' but no matching script tag was found. ")
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
                var docs_json = {"eda8c815-5f65-41b3-b03b-105477d25a44":{"roots":{"references":[{"attributes":{"formatter":{"id":"fa2ebffc-e857-45ec-906f-fb1541d9a327","type":"BasicTickFormatter"},"plot":{"id":"d3f6e8e2-ddc3-48ee-8e18-122016969e93","subtype":"Figure","type":"Plot"},"ticker":{"id":"2b94101a-f073-4eb5-b295-f1dbc26ae88a","type":"BasicTicker"}},"id":"633437bb-cb71-4d58-a038-552aa44e409e","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[10,9,8,7,6,5,4,3,2,1,0]}},"id":"301601bd-d30d-4259-afb5-92dcde58ec2c","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"fe7e52b0-aadd-4a85-9b37-db0c22e5a64a","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"1fc9f87d-a9f8-45c9-a84a-fc4e26746392","type":"ColumnDataSource"},"glyph":{"id":"08a12f47-e141-45ef-860d-3ffbf5206343","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"20357255-cf5f-4afb-9772-56df0c5b3b4b","type":"Square"},"selection_glyph":null},"id":"ddfe3896-639b-41d5-bb57-cec894abf279","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"d3f6e8e2-ddc3-48ee-8e18-122016969e93","subtype":"Figure","type":"Plot"}},"id":"fb68e404-bfe6-4da6-b468-446933af1452","type":"HelpTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"d4015d89-8cdf-4737-88d4-b580e09bf6b5","type":"PanTool"},{"id":"a95df2ec-2954-418e-b9f7-4db20573e47d","type":"WheelZoomTool"},{"id":"4e5bcfe4-d2e9-4890-b99a-ba210fe3471a","type":"BoxZoomTool"},{"id":"c2d83d92-daca-4d70-928b-b55f46810b90","type":"SaveTool"},{"id":"5ac187f1-9085-44c8-9edf-e04dfa164af1","type":"ResetTool"},{"id":"bbbbe61c-c2c5-449b-8838-820d2f8d2189","type":"HelpTool"}]},"id":"8f747a56-136c-4d1e-afcb-c07faa197db8","type":"Toolbar"},{"attributes":{"formatter":{"id":"509e202c-d882-4140-9fa6-4ecb52c23fdf","type":"BasicTickFormatter"},"plot":{"id":"d3f6e8e2-ddc3-48ee-8e18-122016969e93","subtype":"Figure","type":"Plot"},"ticker":{"id":"f4601aac-488d-4fcd-a1b8-f752c613f79a","type":"BasicTicker"}},"id":"ddd5c71a-ce16-407c-88eb-183a626ce105","type":"LinearAxis"},{"attributes":{},"id":"dbbabcde-f829-4885-936c-ee8723c82230","type":"BasicTicker"},{"attributes":{"children":[{"id":"925449b0-2a76-4abb-a02c-45b442ef63cf","subtype":"Figure","type":"Plot"},{"id":"2643f5e9-b82e-420f-acc0-2f7d75424f83","subtype":"Figure","type":"Plot"},{"id":"d3f6e8e2-ddc3-48ee-8e18-122016969e93","subtype":"Figure","type":"Plot"}]},"id":"2df7616f-df6e-4301-a338-99a81df92e3b","type":"Column"},{"attributes":{"plot":{"id":"925449b0-2a76-4abb-a02c-45b442ef63cf","subtype":"Figure","type":"Plot"}},"id":"3cd81213-3deb-4487-90f8-47e2d20f431c","type":"WheelZoomTool"},{"attributes":{},"id":"ceee2a7f-877b-46dd-a472-49d2aed3bb67","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"41427fac-1c71-42b7-abbb-afafe96bccd8","type":"Circle"},{"attributes":{"callback":null},"id":"4810bb44-60f3-4ab3-9059-c9d620111d5f","type":"DataRange1d"},{"attributes":{"plot":{"id":"925449b0-2a76-4abb-a02c-45b442ef63cf","subtype":"Figure","type":"Plot"}},"id":"91600e65-db0f-44bc-b2f4-fdbc44af9a97","type":"ResetTool"},{"attributes":{"callback":null},"id":"177b5725-819f-41ad-b6e9-bf92120a6edc","type":"DataRange1d"},{"attributes":{"formatter":{"id":"bfd8382c-8594-4275-ac07-e45069a69115","type":"BasicTickFormatter"},"plot":{"id":"2643f5e9-b82e-420f-acc0-2f7d75424f83","subtype":"Figure","type":"Plot"},"ticker":{"id":"1b3f5337-0624-4e0a-83d4-057828f3e2a2","type":"BasicTicker"}},"id":"c7bef8da-1207-4fe4-af5b-03393c058682","type":"LinearAxis"},{"attributes":{"below":[{"id":"403dcddf-36f4-4c50-8e16-82a24a373ee4","type":"LinearAxis"}],"left":[{"id":"ef5c9f09-c6d0-4e84-b6ee-42653f8cc30a","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"403dcddf-36f4-4c50-8e16-82a24a373ee4","type":"LinearAxis"},{"id":"abab2232-f3e8-44e4-9b1f-5b88943b4319","type":"Grid"},{"id":"ef5c9f09-c6d0-4e84-b6ee-42653f8cc30a","type":"LinearAxis"},{"id":"1529b68e-a3e8-4c7b-9111-22b32fd87910","type":"Grid"},{"id":"ca8b6219-01de-4a20-b8f3-e37913c9e802","type":"BoxAnnotation"},{"id":"4ba657c6-eaf7-46b7-a67c-3ecab8edfe4a","type":"GlyphRenderer"}],"title":null,"tool_events":{"id":"52057834-fcd7-45d8-a7db-2fbb9d2b1ade","type":"ToolEvents"},"toolbar":{"id":"1e52dbbb-4b37-46a5-aea1-7150992566c3","type":"Toolbar"},"x_range":{"id":"177b5725-819f-41ad-b6e9-bf92120a6edc","type":"DataRange1d"},"x_scale":{"id":"bdfe060b-cbf1-4bd5-a307-17c8d7a7685a","type":"LinearScale"},"y_range":{"id":"51c3c219-b66f-4463-9320-5e344898b6c9","type":"DataRange1d"},"y_scale":{"id":"089d34f5-e89a-4ce1-9505-c0e5b893ea5b","type":"LinearScale"}},"id":"925449b0-2a76-4abb-a02c-45b442ef63cf","subtype":"Figure","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"925449b0-2a76-4abb-a02c-45b442ef63cf","subtype":"Figure","type":"Plot"},"ticker":{"id":"dbbabcde-f829-4885-936c-ee8723c82230","type":"BasicTicker"}},"id":"1529b68e-a3e8-4c7b-9111-22b32fd87910","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"d3f6e8e2-ddc3-48ee-8e18-122016969e93","subtype":"Figure","type":"Plot"},"ticker":{"id":"2b94101a-f073-4eb5-b295-f1dbc26ae88a","type":"BasicTicker"}},"id":"c1d885b1-fb73-46d1-9ffe-1e177a5daaf2","type":"Grid"},{"attributes":{"data_source":{"id":"d345f11f-3668-42d7-9b04-d1a3ac8fcd18","type":"ColumnDataSource"},"glyph":{"id":"41427fac-1c71-42b7-abbb-afafe96bccd8","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"e46a5e9e-cec4-4a47-9e54-2e9f04434642","type":"Circle"},"selection_glyph":null},"id":"4ba657c6-eaf7-46b7-a67c-3ecab8edfe4a","type":"GlyphRenderer"},{"attributes":{},"id":"6e88e5cb-a559-441b-b3a6-8561d702fdd1","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"2643f5e9-b82e-420f-acc0-2f7d75424f83","subtype":"Figure","type":"Plot"}},"id":"a95df2ec-2954-418e-b9f7-4db20573e47d","type":"WheelZoomTool"},{"attributes":{},"id":"509e202c-d882-4140-9fa6-4ecb52c23fdf","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"olive"},"line_alpha":{"value":0.5},"line_color":{"value":"olive"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"08a12f47-e141-45ef-860d-3ffbf5206343","type":"Square"},{"attributes":{},"id":"f4601aac-488d-4fcd-a1b8-f752c613f79a","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"dc3b0323-1e42-4e24-909d-1ec1d0f6e427","type":"Triangle"},{"attributes":{"plot":{"id":"2643f5e9-b82e-420f-acc0-2f7d75424f83","subtype":"Figure","type":"Plot"},"ticker":{"id":"f08f65ca-9122-4963-92c5-9cd20a9a09b8","type":"BasicTicker"}},"id":"6e709752-0dcb-49fa-82c9-6306c996a350","type":"Grid"},{"attributes":{"plot":{"id":"2643f5e9-b82e-420f-acc0-2f7d75424f83","subtype":"Figure","type":"Plot"}},"id":"5ac187f1-9085-44c8-9edf-e04dfa164af1","type":"ResetTool"},{"attributes":{},"id":"fa2ebffc-e857-45ec-906f-fb1541d9a327","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"ef7cfff5-92c7-46b9-a7e9-a652d5aa6329","type":"DataRange1d"},{"attributes":{"plot":{"id":"925449b0-2a76-4abb-a02c-45b442ef63cf","subtype":"Figure","type":"Plot"}},"id":"90bcadcc-f09a-403c-81e2-81ab2bad40b4","type":"SaveTool"},{"attributes":{},"id":"1f3d9115-5227-4e2c-9b7b-27d13edb093e","type":"ToolEvents"},{"attributes":{"below":[{"id":"ddd5c71a-ce16-407c-88eb-183a626ce105","type":"LinearAxis"}],"left":[{"id":"633437bb-cb71-4d58-a038-552aa44e409e","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"ddd5c71a-ce16-407c-88eb-183a626ce105","type":"LinearAxis"},{"id":"970c1f30-7cc8-4405-8d8b-aaed2c54799b","type":"Grid"},{"id":"633437bb-cb71-4d58-a038-552aa44e409e","type":"LinearAxis"},{"id":"c1d885b1-fb73-46d1-9ffe-1e177a5daaf2","type":"Grid"},{"id":"9b7b753a-5959-4c7d-934e-e950f7a20d3b","type":"BoxAnnotation"},{"id":"ddfe3896-639b-41d5-bb57-cec894abf279","type":"GlyphRenderer"}],"title":null,"tool_events":{"id":"add188a3-88a1-4140-a987-5aba41cbd80b","type":"ToolEvents"},"toolbar":{"id":"8ee3e166-82a7-41cf-82e9-1da72f9b6418","type":"Toolbar"},"x_range":{"id":"ef7cfff5-92c7-46b9-a7e9-a652d5aa6329","type":"DataRange1d"},"x_scale":{"id":"366e7db1-79db-43f1-9d4a-ecbf0ca80255","type":"LinearScale"},"y_range":{"id":"1844d321-9fb4-453d-9357-b41e603a035c","type":"DataRange1d"},"y_scale":{"id":"6e1a6284-d7d4-408f-9189-4c8d96fd0a3f","type":"LinearScale"}},"id":"d3f6e8e2-ddc3-48ee-8e18-122016969e93","subtype":"Figure","type":"Plot"},{"attributes":{"overlay":{"id":"ca8b6219-01de-4a20-b8f3-e37913c9e802","type":"BoxAnnotation"},"plot":{"id":"925449b0-2a76-4abb-a02c-45b442ef63cf","subtype":"Figure","type":"Plot"}},"id":"24e4f97c-5b41-4387-8525-05848b28e69e","type":"BoxZoomTool"},{"attributes":{"below":[{"id":"49b6b08f-e49d-41e1-9994-d6c2930203a8","type":"LinearAxis"}],"left":[{"id":"c7bef8da-1207-4fe4-af5b-03393c058682","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"49b6b08f-e49d-41e1-9994-d6c2930203a8","type":"LinearAxis"},{"id":"6e709752-0dcb-49fa-82c9-6306c996a350","type":"Grid"},{"id":"c7bef8da-1207-4fe4-af5b-03393c058682","type":"LinearAxis"},{"id":"9aa9ddd8-bc80-441a-957c-6ab7e0e3506d","type":"Grid"},{"id":"fe7e52b0-aadd-4a85-9b37-db0c22e5a64a","type":"BoxAnnotation"},{"id":"e025acd1-988c-4019-a3c9-c6790ab7fd03","type":"GlyphRenderer"}],"title":null,"tool_events":{"id":"1f3d9115-5227-4e2c-9b7b-27d13edb093e","type":"ToolEvents"},"toolbar":{"id":"8f747a56-136c-4d1e-afcb-c07faa197db8","type":"Toolbar"},"x_range":{"id":"4810bb44-60f3-4ab3-9059-c9d620111d5f","type":"DataRange1d"},"x_scale":{"id":"dae810c8-f872-4e6f-923d-066b6ff1e644","type":"LinearScale"},"y_range":{"id":"6ab14974-1402-4dc4-8c40-c2a6c05f5618","type":"DataRange1d"},"y_scale":{"id":"c6bef76c-380a-478d-8a54-dae22d04ef2b","type":"LinearScale"}},"id":"2643f5e9-b82e-420f-acc0-2f7d75424f83","subtype":"Figure","type":"Plot"},{"attributes":{"overlay":{"id":"fe7e52b0-aadd-4a85-9b37-db0c22e5a64a","type":"BoxAnnotation"},"plot":{"id":"2643f5e9-b82e-420f-acc0-2f7d75424f83","subtype":"Figure","type":"Plot"}},"id":"4e5bcfe4-d2e9-4890-b99a-ba210fe3471a","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"925449b0-2a76-4abb-a02c-45b442ef63cf","subtype":"Figure","type":"Plot"}},"id":"0d61249e-4f1f-4e5d-ac17-2f85537e0a6a","type":"HelpTool"},{"attributes":{},"id":"366e7db1-79db-43f1-9d4a-ecbf0ca80255","type":"LinearScale"},{"attributes":{"callback":null},"id":"51c3c219-b66f-4463-9320-5e344898b6c9","type":"DataRange1d"},{"attributes":{"callback":null},"id":"1844d321-9fb4-453d-9357-b41e603a035c","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"cc4922df-b932-4e6a-a089-4f17170a303c","type":"PanTool"},{"id":"3cd81213-3deb-4487-90f8-47e2d20f431c","type":"WheelZoomTool"},{"id":"24e4f97c-5b41-4387-8525-05848b28e69e","type":"BoxZoomTool"},{"id":"90bcadcc-f09a-403c-81e2-81ab2bad40b4","type":"SaveTool"},{"id":"91600e65-db0f-44bc-b2f4-fdbc44af9a97","type":"ResetTool"},{"id":"0d61249e-4f1f-4e5d-ac17-2f85537e0a6a","type":"HelpTool"}]},"id":"1e52dbbb-4b37-46a5-aea1-7150992566c3","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"firebrick"},"line_alpha":{"value":0.5},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"0f11a073-9fac-42d5-8d06-16a67effc464","type":"Triangle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"9b7b753a-5959-4c7d-934e-e950f7a20d3b","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"2643f5e9-b82e-420f-acc0-2f7d75424f83","subtype":"Figure","type":"Plot"}},"id":"d4015d89-8cdf-4737-88d4-b580e09bf6b5","type":"PanTool"},{"attributes":{"formatter":{"id":"2f0d2c9d-a015-489b-a2a3-0b49ba5f5333","type":"BasicTickFormatter"},"plot":{"id":"2643f5e9-b82e-420f-acc0-2f7d75424f83","subtype":"Figure","type":"Plot"},"ticker":{"id":"f08f65ca-9122-4963-92c5-9cd20a9a09b8","type":"BasicTicker"}},"id":"49b6b08f-e49d-41e1-9994-d6c2930203a8","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"5d2cd7c6-ca73-4bd8-95d7-a1609b42a3d6","type":"PanTool"},{"id":"9c6b12bf-df4c-4df0-aa00-de5cd2285242","type":"WheelZoomTool"},{"id":"d5ad9ba4-d81a-4895-b371-5b07195d3938","type":"BoxZoomTool"},{"id":"1a814951-bea9-4ae4-be8d-b4b6af7893ce","type":"SaveTool"},{"id":"627925bb-3015-4c1e-b8cc-ba45f27e8eb8","type":"ResetTool"},{"id":"fb68e404-bfe6-4da6-b468-446933af1452","type":"HelpTool"}]},"id":"8ee3e166-82a7-41cf-82e9-1da72f9b6418","type":"Toolbar"},{"attributes":{"plot":{"id":"d3f6e8e2-ddc3-48ee-8e18-122016969e93","subtype":"Figure","type":"Plot"}},"id":"1a814951-bea9-4ae4-be8d-b4b6af7893ce","type":"SaveTool"},{"attributes":{},"id":"089d34f5-e89a-4ce1-9505-c0e5b893ea5b","type":"LinearScale"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[0,1,2,3,4,5,6,7,8,9,10]}},"id":"d345f11f-3668-42d7-9b04-d1a3ac8fcd18","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"ca8b6219-01de-4a20-b8f3-e37913c9e802","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"d3f6e8e2-ddc3-48ee-8e18-122016969e93","subtype":"Figure","type":"Plot"}},"id":"5d2cd7c6-ca73-4bd8-95d7-a1609b42a3d6","type":"PanTool"},{"attributes":{},"id":"6e1a6284-d7d4-408f-9189-4c8d96fd0a3f","type":"LinearScale"},{"attributes":{"plot":{"id":"2643f5e9-b82e-420f-acc0-2f7d75424f83","subtype":"Figure","type":"Plot"}},"id":"c2d83d92-daca-4d70-928b-b55f46810b90","type":"SaveTool"},{"attributes":{},"id":"dae810c8-f872-4e6f-923d-066b6ff1e644","type":"LinearScale"},{"attributes":{"plot":{"id":"d3f6e8e2-ddc3-48ee-8e18-122016969e93","subtype":"Figure","type":"Plot"},"ticker":{"id":"f4601aac-488d-4fcd-a1b8-f752c613f79a","type":"BasicTicker"}},"id":"970c1f30-7cc8-4405-8d8b-aaed2c54799b","type":"Grid"},{"attributes":{},"id":"52057834-fcd7-45d8-a7db-2fbb9d2b1ade","type":"ToolEvents"},{"attributes":{"plot":{"id":"d3f6e8e2-ddc3-48ee-8e18-122016969e93","subtype":"Figure","type":"Plot"}},"id":"627925bb-3015-4c1e-b8cc-ba45f27e8eb8","type":"ResetTool"},{"attributes":{"plot":{"id":"2643f5e9-b82e-420f-acc0-2f7d75424f83","subtype":"Figure","type":"Plot"}},"id":"bbbbe61c-c2c5-449b-8838-820d2f8d2189","type":"HelpTool"},{"attributes":{"data_source":{"id":"301601bd-d30d-4259-afb5-92dcde58ec2c","type":"ColumnDataSource"},"glyph":{"id":"0f11a073-9fac-42d5-8d06-16a67effc464","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"dc3b0323-1e42-4e24-909d-1ec1d0f6e427","type":"Triangle"},"selection_glyph":null},"id":"e025acd1-988c-4019-a3c9-c6790ab7fd03","type":"GlyphRenderer"},{"attributes":{},"id":"2b94101a-f073-4eb5-b295-f1dbc26ae88a","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"2643f5e9-b82e-420f-acc0-2f7d75424f83","subtype":"Figure","type":"Plot"},"ticker":{"id":"1b3f5337-0624-4e0a-83d4-057828f3e2a2","type":"BasicTicker"}},"id":"9aa9ddd8-bc80-441a-957c-6ab7e0e3506d","type":"Grid"},{"attributes":{},"id":"2f0d2c9d-a015-489b-a2a3-0b49ba5f5333","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"925449b0-2a76-4abb-a02c-45b442ef63cf","subtype":"Figure","type":"Plot"}},"id":"cc4922df-b932-4e6a-a089-4f17170a303c","type":"PanTool"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[5,4,3,2,1,0,1,2,3,4,5]}},"id":"1fc9f87d-a9f8-45c9-a84a-fc4e26746392","type":"ColumnDataSource"},{"attributes":{},"id":"add188a3-88a1-4140-a987-5aba41cbd80b","type":"ToolEvents"},{"attributes":{},"id":"f08f65ca-9122-4963-92c5-9cd20a9a09b8","type":"BasicTicker"},{"attributes":{},"id":"1b3f5337-0624-4e0a-83d4-057828f3e2a2","type":"BasicTicker"},{"attributes":{},"id":"c6bef76c-380a-478d-8a54-dae22d04ef2b","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"20357255-cf5f-4afb-9772-56df0c5b3b4b","type":"Square"},{"attributes":{"callback":null},"id":"6ab14974-1402-4dc4-8c40-c2a6c05f5618","type":"DataRange1d"},{"attributes":{"formatter":{"id":"6e88e5cb-a559-441b-b3a6-8561d702fdd1","type":"BasicTickFormatter"},"plot":{"id":"925449b0-2a76-4abb-a02c-45b442ef63cf","subtype":"Figure","type":"Plot"},"ticker":{"id":"bb9883d8-af11-4a76-b4f4-0c66a95104d1","type":"BasicTicker"}},"id":"403dcddf-36f4-4c50-8e16-82a24a373ee4","type":"LinearAxis"},{"attributes":{"formatter":{"id":"ceee2a7f-877b-46dd-a472-49d2aed3bb67","type":"BasicTickFormatter"},"plot":{"id":"925449b0-2a76-4abb-a02c-45b442ef63cf","subtype":"Figure","type":"Plot"},"ticker":{"id":"dbbabcde-f829-4885-936c-ee8723c82230","type":"BasicTicker"}},"id":"ef5c9f09-c6d0-4e84-b6ee-42653f8cc30a","type":"LinearAxis"},{"attributes":{},"id":"bdfe060b-cbf1-4bd5-a307-17c8d7a7685a","type":"LinearScale"},{"attributes":{},"id":"bfd8382c-8594-4275-ac07-e45069a69115","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"d3f6e8e2-ddc3-48ee-8e18-122016969e93","subtype":"Figure","type":"Plot"}},"id":"9c6b12bf-df4c-4df0-aa00-de5cd2285242","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"925449b0-2a76-4abb-a02c-45b442ef63cf","subtype":"Figure","type":"Plot"},"ticker":{"id":"bb9883d8-af11-4a76-b4f4-0c66a95104d1","type":"BasicTicker"}},"id":"abab2232-f3e8-44e4-9b1f-5b88943b4319","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"e46a5e9e-cec4-4a47-9e54-2e9f04434642","type":"Circle"},{"attributes":{},"id":"bb9883d8-af11-4a76-b4f4-0c66a95104d1","type":"BasicTicker"},{"attributes":{"overlay":{"id":"9b7b753a-5959-4c7d-934e-e950f7a20d3b","type":"BoxAnnotation"},"plot":{"id":"d3f6e8e2-ddc3-48ee-8e18-122016969e93","subtype":"Figure","type":"Plot"}},"id":"d5ad9ba4-d81a-4895-b371-5b07195d3938","type":"BoxZoomTool"}],"root_ids":["2df7616f-df6e-4301-a338-99a81df92e3b"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"eda8c815-5f65-41b3-b03b-105477d25a44","elementid":"fccde4d7-dc2c-4112-996b-59f6ca462df8","modelid":"2df7616f-df6e-4301-a338-99a81df92e3b"}];
                
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
