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
      };var element = document.getElementById("2f6fca7d-75a3-4c22-84c9-f45984ebbdff");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '2f6fca7d-75a3-4c22-84c9-f45984ebbdff' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.9.min.js"];
    
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
                    var docs_json = {"87b6a0aa-afbf-4936-a933-75378ed3e364":{"roots":{"references":[{"attributes":{},"id":"f729c02a-e356-4e56-979c-540b598de490","type":"ResetTool"},{"attributes":{},"id":"87261f08-797a-4784-bdb1-4184ed2f65e8","type":"BasicTicker"},{"attributes":{"child":{"id":"72bcd170-6ba5-4b76-bde0-de167038a960","subtype":"Figure","type":"Plot"},"title":"line"},"id":"722f4b60-2721-4d03-91a3-00185b2b7a9a","type":"Panel"},{"attributes":{"plot":{"id":"72bcd170-6ba5-4b76-bde0-de167038a960","subtype":"Figure","type":"Plot"},"ticker":{"id":"2dbbe297-be2c-445c-bd16-d915305c3b34","type":"BasicTicker"}},"id":"cc3194f9-f4e5-417b-adf0-5b47163950f3","type":"Grid"},{"attributes":{},"id":"9e9fe411-d7d1-4f8b-ba29-74cb99455ec1","type":"HelpTool"},{"attributes":{"callback":null,"tabs":[{"id":"5e2ad95b-149f-498e-9f00-77dbc912b82c","type":"Panel"},{"id":"722f4b60-2721-4d03-91a3-00185b2b7a9a","type":"Panel"}]},"id":"5ee4ee15-5fa1-475b-8d9d-6f0a22a08f87","type":"Tabs"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"5d25046f-2d27-491a-a5c7-d72c3717cf45","type":"PanTool"},{"id":"63bb38e4-5f2b-4b01-98a2-8dbfe6aad7a4","type":"WheelZoomTool"},{"id":"46d6057c-0e8b-4325-b2cc-19205cdbeebf","type":"BoxZoomTool"},{"id":"c90cd90e-f2c4-49cd-bb5b-fa96eb7686fd","type":"SaveTool"},{"id":"f729c02a-e356-4e56-979c-540b598de490","type":"ResetTool"},{"id":"9e9fe411-d7d1-4f8b-ba29-74cb99455ec1","type":"HelpTool"}]},"id":"94c0a06a-4554-4244-ab3b-15e9ca9e366a","type":"Toolbar"},{"attributes":{},"id":"34ee62ed-e96c-447c-98fd-a0e65049454c","type":"LinearScale"},{"attributes":{"callback":null},"id":"08fac652-7234-4544-a6fa-3c6fef9ae1f1","type":"DataRange1d"},{"attributes":{"plot":null,"text":""},"id":"cf717ced-806a-46d1-87c2-1c9bbcf01264","type":"Title"},{"attributes":{},"id":"adf8cb92-596b-4a96-a498-18fb35971531","type":"LinearScale"},{"attributes":{"formatter":{"id":"33e712b1-da83-4962-afe6-61281d1b09fb","type":"BasicTickFormatter"},"plot":{"id":"72bcd170-6ba5-4b76-bde0-de167038a960","subtype":"Figure","type":"Plot"},"ticker":{"id":"2dbbe297-be2c-445c-bd16-d915305c3b34","type":"BasicTicker"}},"id":"e3be231b-72f3-401d-a33a-7f1d8e3d10cc","type":"LinearAxis"},{"attributes":{},"id":"145232e5-e664-4b15-8b99-06891fca8f0a","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"1f2c6f30-a5d0-4fbe-8b12-0de55cdfbd13","type":"ColumnDataSource"},"glyph":{"id":"866a50c7-d5eb-4691-b7c6-405fac680c54","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d10e61b5-4cb0-4707-ad2f-3ec6bf8f051c","type":"Circle"},"selection_glyph":null,"view":{"id":"9bacbb9b-aa74-4c92-a1c1-1750a93eb49d","type":"CDSView"}},"id":"6e0ae433-9331-4618-a082-880c0d9f7dc6","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"d497b627-804b-49a4-8a5c-cf8380cfc21a","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"866a50c7-d5eb-4691-b7c6-405fac680c54","type":"Circle"},{"attributes":{"dimension":1,"plot":{"id":"3f75572e-4f81-498f-84e2-460cb8853ba2","subtype":"Figure","type":"Plot"},"ticker":{"id":"aae9d190-bd14-4d66-8b84-582ecc844a79","type":"BasicTicker"}},"id":"65cd4b07-b9f3-464d-a4bf-d18f67e8128d","type":"Grid"},{"attributes":{},"id":"67fbfe8a-86ec-42fa-9188-7d3cce353187","type":"SaveTool"},{"attributes":{"data_source":{"id":"c41b3314-656f-4fb9-804e-dada742d7139","type":"ColumnDataSource"},"glyph":{"id":"9c6f6cec-9f8d-4dd0-899a-535b0d7f3fa4","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"70a87e97-cec6-4e08-b243-159f1a87aeb9","type":"Line"},"selection_glyph":null,"view":{"id":"c2d1cc44-9230-4251-ad07-f23619407505","type":"CDSView"}},"id":"7d18fdef-96db-4fdf-afc4-4cf14c8c462a","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"69903176-b129-4dfb-88eb-c32be67386d6","type":"DataRange1d"},{"attributes":{},"id":"c75de812-872b-41b6-9b7b-ec9caaa6bd10","type":"BasicTickFormatter"},{"attributes":{},"id":"aae9d190-bd14-4d66-8b84-582ecc844a79","type":"BasicTicker"},{"attributes":{"source":{"id":"1f2c6f30-a5d0-4fbe-8b12-0de55cdfbd13","type":"ColumnDataSource"}},"id":"9bacbb9b-aa74-4c92-a1c1-1750a93eb49d","type":"CDSView"},{"attributes":{"below":[{"id":"e3be231b-72f3-401d-a33a-7f1d8e3d10cc","type":"LinearAxis"}],"left":[{"id":"b6eaf65b-e75b-414e-b231-ac83c50a15b9","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"e3be231b-72f3-401d-a33a-7f1d8e3d10cc","type":"LinearAxis"},{"id":"cc3194f9-f4e5-417b-adf0-5b47163950f3","type":"Grid"},{"id":"b6eaf65b-e75b-414e-b231-ac83c50a15b9","type":"LinearAxis"},{"id":"f12dda2c-3d62-4628-8ebb-71dc94c03675","type":"Grid"},{"id":"32871056-f079-4807-9c58-92db661735f8","type":"BoxAnnotation"},{"id":"7d18fdef-96db-4fdf-afc4-4cf14c8c462a","type":"GlyphRenderer"}],"title":{"id":"cf717ced-806a-46d1-87c2-1c9bbcf01264","type":"Title"},"toolbar":{"id":"94c0a06a-4554-4244-ab3b-15e9ca9e366a","type":"Toolbar"},"x_range":{"id":"69903176-b129-4dfb-88eb-c32be67386d6","type":"DataRange1d"},"x_scale":{"id":"adf8cb92-596b-4a96-a498-18fb35971531","type":"LinearScale"},"y_range":{"id":"08fac652-7234-4544-a6fa-3c6fef9ae1f1","type":"DataRange1d"},"y_scale":{"id":"11f2190e-c3a7-412d-bd21-867b1a6be11f","type":"LinearScale"}},"id":"72bcd170-6ba5-4b76-bde0-de167038a960","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"33e712b1-da83-4962-afe6-61281d1b09fb","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"145232e5-e664-4b15-8b99-06891fca8f0a","type":"BasicTickFormatter"},"plot":{"id":"72bcd170-6ba5-4b76-bde0-de167038a960","subtype":"Figure","type":"Plot"},"ticker":{"id":"ce290d4a-14f7-4662-acfe-a274a9074cd0","type":"BasicTicker"}},"id":"b6eaf65b-e75b-414e-b231-ac83c50a15b9","type":"LinearAxis"},{"attributes":{"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"9c6f6cec-9f8d-4dd0-899a-535b0d7f3fa4","type":"Line"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"302dc8d3-627e-46a7-abca-b495a7b501bd","type":"BoxAnnotation"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"32871056-f079-4807-9c58-92db661735f8","type":"BoxAnnotation"},{"attributes":{},"id":"25b70c83-861b-43a4-9a29-bcdc4653fc05","type":"WheelZoomTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]}},"id":"c41b3314-656f-4fb9-804e-dada742d7139","type":"ColumnDataSource"},{"attributes":{},"id":"5d25046f-2d27-491a-a5c7-d72c3717cf45","type":"PanTool"},{"attributes":{"overlay":{"id":"302dc8d3-627e-46a7-abca-b495a7b501bd","type":"BoxAnnotation"}},"id":"d4a73ca8-ef7e-4633-909b-2185294cc28e","type":"BoxZoomTool"},{"attributes":{"child":{"id":"3f75572e-4f81-498f-84e2-460cb8853ba2","subtype":"Figure","type":"Plot"},"title":"circle"},"id":"5e2ad95b-149f-498e-9f00-77dbc912b82c","type":"Panel"},{"attributes":{"callback":null},"id":"abe3fd5e-a499-4c3f-a4c3-4f4961cfa5ae","type":"DataRange1d"},{"attributes":{},"id":"2dbbe297-be2c-445c-bd16-d915305c3b34","type":"BasicTicker"},{"attributes":{},"id":"ce290d4a-14f7-4662-acfe-a274a9074cd0","type":"BasicTicker"},{"attributes":{"below":[{"id":"78d4d384-c5d2-411b-9173-6d5a46859d71","type":"LinearAxis"}],"left":[{"id":"d1a76629-6bd2-4bca-8b84-80fb37bda4e0","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"78d4d384-c5d2-411b-9173-6d5a46859d71","type":"LinearAxis"},{"id":"b85ae6aa-2c39-4c08-ae1e-e109dd25e51e","type":"Grid"},{"id":"d1a76629-6bd2-4bca-8b84-80fb37bda4e0","type":"LinearAxis"},{"id":"65cd4b07-b9f3-464d-a4bf-d18f67e8128d","type":"Grid"},{"id":"302dc8d3-627e-46a7-abca-b495a7b501bd","type":"BoxAnnotation"},{"id":"6e0ae433-9331-4618-a082-880c0d9f7dc6","type":"GlyphRenderer"}],"title":{"id":"320b4030-1823-426d-9b1a-b8ee3a787d3a","type":"Title"},"toolbar":{"id":"6211a89e-6c6f-444f-8a1b-d3ab2c6b80c0","type":"Toolbar"},"x_range":{"id":"abe3fd5e-a499-4c3f-a4c3-4f4961cfa5ae","type":"DataRange1d"},"x_scale":{"id":"727bcf4e-0edc-4905-8a06-cb67eff36356","type":"LinearScale"},"y_range":{"id":"d497b627-804b-49a4-8a5c-cf8380cfc21a","type":"DataRange1d"},"y_scale":{"id":"34ee62ed-e96c-447c-98fd-a0e65049454c","type":"LinearScale"}},"id":"3f75572e-4f81-498f-84e2-460cb8853ba2","subtype":"Figure","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"72bcd170-6ba5-4b76-bde0-de167038a960","subtype":"Figure","type":"Plot"},"ticker":{"id":"ce290d4a-14f7-4662-acfe-a274a9074cd0","type":"BasicTicker"}},"id":"f12dda2c-3d62-4628-8ebb-71dc94c03675","type":"Grid"},{"attributes":{},"id":"e29428f4-8d2d-4b1f-b774-795480aeebcf","type":"ResetTool"},{"attributes":{"formatter":{"id":"8fc27405-b345-4caf-98ff-dba0a6b3c8e5","type":"BasicTickFormatter"},"plot":{"id":"3f75572e-4f81-498f-84e2-460cb8853ba2","subtype":"Figure","type":"Plot"},"ticker":{"id":"aae9d190-bd14-4d66-8b84-582ecc844a79","type":"BasicTicker"}},"id":"d1a76629-6bd2-4bca-8b84-80fb37bda4e0","type":"LinearAxis"},{"attributes":{"formatter":{"id":"c75de812-872b-41b6-9b7b-ec9caaa6bd10","type":"BasicTickFormatter"},"plot":{"id":"3f75572e-4f81-498f-84e2-460cb8853ba2","subtype":"Figure","type":"Plot"},"ticker":{"id":"87261f08-797a-4784-bdb1-4184ed2f65e8","type":"BasicTicker"}},"id":"78d4d384-c5d2-411b-9173-6d5a46859d71","type":"LinearAxis"},{"attributes":{},"id":"63a9d9ea-bef3-45ce-813f-6ad819e06925","type":"HelpTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"d10e61b5-4cb0-4707-ad2f-3ec6bf8f051c","type":"Circle"},{"attributes":{"plot":null,"text":""},"id":"320b4030-1823-426d-9b1a-b8ee3a787d3a","type":"Title"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]}},"id":"1f2c6f30-a5d0-4fbe-8b12-0de55cdfbd13","type":"ColumnDataSource"},{"attributes":{},"id":"11f2190e-c3a7-412d-bd21-867b1a6be11f","type":"LinearScale"},{"attributes":{},"id":"727bcf4e-0edc-4905-8a06-cb67eff36356","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"79c570a5-9815-454f-9ca8-8c483c4a49dc","type":"PanTool"},{"id":"25b70c83-861b-43a4-9a29-bcdc4653fc05","type":"WheelZoomTool"},{"id":"d4a73ca8-ef7e-4633-909b-2185294cc28e","type":"BoxZoomTool"},{"id":"67fbfe8a-86ec-42fa-9188-7d3cce353187","type":"SaveTool"},{"id":"e29428f4-8d2d-4b1f-b774-795480aeebcf","type":"ResetTool"},{"id":"63a9d9ea-bef3-45ce-813f-6ad819e06925","type":"HelpTool"}]},"id":"6211a89e-6c6f-444f-8a1b-d3ab2c6b80c0","type":"Toolbar"},{"attributes":{"plot":{"id":"3f75572e-4f81-498f-84e2-460cb8853ba2","subtype":"Figure","type":"Plot"},"ticker":{"id":"87261f08-797a-4784-bdb1-4184ed2f65e8","type":"BasicTicker"}},"id":"b85ae6aa-2c39-4c08-ae1e-e109dd25e51e","type":"Grid"},{"attributes":{},"id":"8fc27405-b345-4caf-98ff-dba0a6b3c8e5","type":"BasicTickFormatter"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"70a87e97-cec6-4e08-b243-159f1a87aeb9","type":"Line"},{"attributes":{"source":{"id":"c41b3314-656f-4fb9-804e-dada742d7139","type":"ColumnDataSource"}},"id":"c2d1cc44-9230-4251-ad07-f23619407505","type":"CDSView"},{"attributes":{"overlay":{"id":"32871056-f079-4807-9c58-92db661735f8","type":"BoxAnnotation"}},"id":"46d6057c-0e8b-4325-b2cc-19205cdbeebf","type":"BoxZoomTool"},{"attributes":{},"id":"63bb38e4-5f2b-4b01-98a2-8dbfe6aad7a4","type":"WheelZoomTool"},{"attributes":{},"id":"c90cd90e-f2c4-49cd-bb5b-fa96eb7686fd","type":"SaveTool"},{"attributes":{},"id":"79c570a5-9815-454f-9ca8-8c483c4a49dc","type":"PanTool"}],"root_ids":["5ee4ee15-5fa1-475b-8d9d-6f0a22a08f87"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"87b6a0aa-afbf-4936-a933-75378ed3e364","elementid":"2f6fca7d-75a3-4c22-84c9-f45984ebbdff","modelid":"5ee4ee15-5fa1-475b-8d9d-6f0a22a08f87"}];
                
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
                        console.log("Bokeh: ERROR: Unable to embed document because BokehJS library is missing")
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
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
