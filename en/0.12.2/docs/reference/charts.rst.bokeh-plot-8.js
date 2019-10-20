document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = "";
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force !== "") {
        window._bokeh_onload_callbacks = [];
        window._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        delete window._bokeh_onload_callbacks
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
      };var element = document.getElementById("8b06e403-b61d-4a15-a532-6f7ee6d453ea");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '8b06e403-b61d-4a15-a532-6f7ee6d453ea' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.2.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"cde4c04a-fe00-4a79-a2f9-05186cca4ace":{"roots":{"references":[{"attributes":{"line_color":{"value":"#407ee7"},"line_width":{"value":2},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"186dd5c4-e6c7-4450-a2e2-e932682e41e7","type":"Line"},{"attributes":{"plot":{"id":"3c363794-b0d0-49d1-92e8-b627bafd38a7","subtype":"Chart","type":"Plot"}},"id":"63492216-f8aa-4337-b3d6-fd06ce1b8a76","type":"SaveTool"},{"attributes":{"dimension":1,"plot":{"id":"3c363794-b0d0-49d1-92e8-b627bafd38a7","subtype":"Chart","type":"Plot"},"ticker":{"id":"28affda9-d2ea-4909-8f73-14576c3ee0ee","type":"BasicTicker"}},"id":"94019194-2ce7-4fe8-a851-5018837640f3","type":"Grid"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"series":"a"},{"series":"a"},{"series":"a"},{"series":"a"},{"series":"a"}],"series":["a","a","a","a","a"],"x_values":[0,1,2,3,4],"y_values":[2,3,7,5,26]}},"id":"912e2046-70fe-427e-bb2e-adb069a67875","type":"ColumnDataSource"},{"attributes":{"legends":[["a",[{"id":"d71d1616-88c6-45ba-8902-12d1fa2ff709","type":"GlyphRenderer"}]],["b",[{"id":"91013ec5-1953-4843-8632-95576ef8f03f","type":"GlyphRenderer"}]],["c",[{"id":"157c3115-ab79-4c64-88b7-5fdbfc446f8f","type":"GlyphRenderer"}]]],"location":"top_left","plot":{"id":"3c363794-b0d0-49d1-92e8-b627bafd38a7","subtype":"Chart","type":"Plot"}},"id":"db8e069c-cf9b-4fcc-afd7-47a552204583","type":"Legend"},{"attributes":{"plot":{"id":"3c363794-b0d0-49d1-92e8-b627bafd38a7","subtype":"Chart","type":"Plot"}},"id":"d4494fb0-9aba-488f-90ab-32ae2122ca38","type":"HelpTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"f366cc8d-2099-4f9a-a1c5-e263ae8e4838","type":"PanTool"},{"id":"eb420732-e201-4a7e-ba03-e6f1a77c8af0","type":"WheelZoomTool"},{"id":"ef545758-0b1b-4dc3-b721-86b7dc66b73c","type":"BoxZoomTool"},{"id":"63492216-f8aa-4337-b3d6-fd06ce1b8a76","type":"SaveTool"},{"id":"9c53497e-2372-4ba2-8f2f-cbab5f6b2800","type":"ResetTool"},{"id":"d4494fb0-9aba-488f-90ab-32ae2122ca38","type":"HelpTool"}]},"id":"26357c85-28f5-4e55-8eb8-ee58a3edd3d0","type":"Toolbar"},{"attributes":{"plot":{"id":"3c363794-b0d0-49d1-92e8-b627bafd38a7","subtype":"Chart","type":"Plot"}},"id":"eb420732-e201-4a7e-ba03-e6f1a77c8af0","type":"WheelZoomTool"},{"attributes":{},"id":"4fcaa21a-b332-4520-960f-40b95a11bb01","type":"BasicTicker"},{"attributes":{"line_color":{"value":"#f22c40"},"line_width":{"value":2},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"8c8f78b7-336d-478c-a3db-80ef3ba4a234","type":"Line"},{"attributes":{"axis_label":"index","formatter":{"id":"24b0f3b3-a033-416e-8843-be3b4bc78c81","type":"BasicTickFormatter"},"plot":{"id":"3c363794-b0d0-49d1-92e8-b627bafd38a7","subtype":"Chart","type":"Plot"},"ticker":{"id":"4fcaa21a-b332-4520-960f-40b95a11bb01","type":"BasicTicker"}},"id":"89d140fd-e2ed-4449-8e3f-f1a7eb11ae6f","type":"LinearAxis"},{"attributes":{"axis_label":"Languages","formatter":{"id":"b38bd98c-9b0d-4ffc-bf39-554f335dd24c","type":"BasicTickFormatter"},"plot":{"id":"3c363794-b0d0-49d1-92e8-b627bafd38a7","subtype":"Chart","type":"Plot"},"ticker":{"id":"28affda9-d2ea-4909-8f73-14576c3ee0ee","type":"BasicTicker"}},"id":"e6b139c6-f104-46cd-966c-b5746c2b4f9c","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"series":"c"},{"series":"c"},{"series":"c"},{"series":"c"},{"series":"c"}],"series":["c","c","c","c","c"],"x_values":[0,1,2,3,4],"y_values":[22,43,10,25,26]}},"id":"494792e7-bb23-42e7-a290-2d26bf897f18","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"e1800e0a-6606-4a9a-96f1-473841fdf083","type":"ColumnDataSource"},"glyph":{"id":"c5f52d15-a5e3-4516-bad4-b5400338a9a1","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"91013ec5-1953-4843-8632-95576ef8f03f","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"dc0f1758-20b7-4c9c-9541-639381b22847","type":"BoxAnnotation"},"plot":{"id":"3c363794-b0d0-49d1-92e8-b627bafd38a7","subtype":"Chart","type":"Plot"}},"id":"ef545758-0b1b-4dc3-b721-86b7dc66b73c","type":"BoxZoomTool"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"series":"b"},{"series":"b"},{"series":"b"},{"series":"b"},{"series":"b"}],"series":["b","b","b","b","b"],"x_values":[0,1,2,3,4],"y_values":[12,33,47,15,126]}},"id":"e1800e0a-6606-4a9a-96f1-473841fdf083","type":"ColumnDataSource"},{"attributes":{"callback":null,"end":4.4,"start":-0.4},"id":"95c669ac-dbce-47da-826d-9876a649b4ff","type":"Range1d"},{"attributes":{},"id":"24b0f3b3-a033-416e-8843-be3b4bc78c81","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"3c363794-b0d0-49d1-92e8-b627bafd38a7","subtype":"Chart","type":"Plot"},"ticker":{"id":"4fcaa21a-b332-4520-960f-40b95a11bb01","type":"BasicTicker"}},"id":"a6832892-976d-43ba-9a09-fd20cab00071","type":"Grid"},{"attributes":{},"id":"b38bd98c-9b0d-4ffc-bf39-554f335dd24c","type":"BasicTickFormatter"},{"attributes":{},"id":"cab893a8-44fd-4e05-a4fd-538b64e54027","type":"ToolEvents"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"dc0f1758-20b7-4c9c-9541-639381b22847","type":"BoxAnnotation"},{"attributes":{"callback":null,"end":138.4,"start":-10.4},"id":"0dfc88f0-0eaa-41b1-84f1-835a4c186ff8","type":"Range1d"},{"attributes":{"data_source":{"id":"912e2046-70fe-427e-bb2e-adb069a67875","type":"ColumnDataSource"},"glyph":{"id":"8c8f78b7-336d-478c-a3db-80ef3ba4a234","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"d71d1616-88c6-45ba-8902-12d1fa2ff709","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":"line"},"id":"19c56935-1872-42b8-933a-c9b3b488d9f8","type":"Title"},{"attributes":{},"id":"28affda9-d2ea-4909-8f73-14576c3ee0ee","type":"BasicTicker"},{"attributes":{"line_color":{"value":"#5ab738"},"line_width":{"value":2},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"c5f52d15-a5e3-4516-bad4-b5400338a9a1","type":"Line"},{"attributes":{"below":[{"id":"89d140fd-e2ed-4449-8e3f-f1a7eb11ae6f","type":"LinearAxis"}],"height":400,"left":[{"id":"e6b139c6-f104-46cd-966c-b5746c2b4f9c","type":"LinearAxis"}],"renderers":[{"id":"dc0f1758-20b7-4c9c-9541-639381b22847","type":"BoxAnnotation"},{"id":"d71d1616-88c6-45ba-8902-12d1fa2ff709","type":"GlyphRenderer"},{"id":"91013ec5-1953-4843-8632-95576ef8f03f","type":"GlyphRenderer"},{"id":"157c3115-ab79-4c64-88b7-5fdbfc446f8f","type":"GlyphRenderer"},{"id":"db8e069c-cf9b-4fcc-afd7-47a552204583","type":"Legend"},{"id":"89d140fd-e2ed-4449-8e3f-f1a7eb11ae6f","type":"LinearAxis"},{"id":"e6b139c6-f104-46cd-966c-b5746c2b4f9c","type":"LinearAxis"},{"id":"a6832892-976d-43ba-9a09-fd20cab00071","type":"Grid"},{"id":"94019194-2ce7-4fe8-a851-5018837640f3","type":"Grid"}],"title":{"id":"19c56935-1872-42b8-933a-c9b3b488d9f8","type":"Title"},"tool_events":{"id":"cab893a8-44fd-4e05-a4fd-538b64e54027","type":"ToolEvents"},"toolbar":{"id":"26357c85-28f5-4e55-8eb8-ee58a3edd3d0","type":"Toolbar"},"width":400,"x_mapper_type":"auto","x_range":{"id":"95c669ac-dbce-47da-826d-9876a649b4ff","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"0dfc88f0-0eaa-41b1-84f1-835a4c186ff8","type":"Range1d"}},"id":"3c363794-b0d0-49d1-92e8-b627bafd38a7","subtype":"Chart","type":"Plot"},{"attributes":{"plot":{"id":"3c363794-b0d0-49d1-92e8-b627bafd38a7","subtype":"Chart","type":"Plot"}},"id":"9c53497e-2372-4ba2-8f2f-cbab5f6b2800","type":"ResetTool"},{"attributes":{"data_source":{"id":"494792e7-bb23-42e7-a290-2d26bf897f18","type":"ColumnDataSource"},"glyph":{"id":"186dd5c4-e6c7-4450-a2e2-e932682e41e7","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"157c3115-ab79-4c64-88b7-5fdbfc446f8f","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"3c363794-b0d0-49d1-92e8-b627bafd38a7","subtype":"Chart","type":"Plot"}},"id":"f366cc8d-2099-4f9a-a1c5-e263ae8e4838","type":"PanTool"}],"root_ids":["3c363794-b0d0-49d1-92e8-b627bafd38a7"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"cde4c04a-fe00-4a79-a2f9-05186cca4ace","elementid":"8b06e403-b61d-4a15-a532-6f7ee6d453ea","modelid":"3c363794-b0d0-49d1-92e8-b627bafd38a7"}];
                  
                  Bokeh.embed.embed_items(docs_json, render_items);
              });
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.css");
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
});