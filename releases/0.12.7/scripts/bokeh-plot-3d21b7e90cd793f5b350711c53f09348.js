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
      };var element = document.getElementById("2293a578-3175-4b92-98bf-6ae6c81c0a06");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '2293a578-3175-4b92-98bf-6ae6c81c0a06' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.7.min.js"];
    
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
                var docs_json = {"ae693cbe-fa57-4156-86e3-8ba4f2034ab4":{"roots":{"references":[{"attributes":{},"id":"e47467a1-c176-4c80-8070-19f72f9b2a63","type":"SaveTool"},{"attributes":{},"id":"e9c69f44-eec1-41f0-8c03-5d47b556fe27","type":"PanTool"},{"attributes":{"formatter":{"id":"d85be4ac-430f-4b2c-b1e9-1f283413106e","type":"BasicTickFormatter"},"plot":{"id":"f0e3d605-c8c2-4b67-a97d-40399140b2ee","subtype":"Figure","type":"Plot"},"ticker":{"id":"6cb675d7-2079-4ce0-99a9-a6388d18242b","type":"BasicTicker"}},"id":"632b5797-043a-4532-9214-b22dc90340bd","type":"LinearAxis"},{"attributes":{"formatter":{"id":"936b7acd-efa3-4175-8ab0-df5fdaf7d5ce","type":"BasicTickFormatter"},"plot":{"id":"f0e3d605-c8c2-4b67-a97d-40399140b2ee","subtype":"Figure","type":"Plot"},"ticker":{"id":"7782d034-41fb-4345-9854-b57d427b1f7d","type":"BasicTicker"}},"id":"e39e5bcc-b5c7-49fa-abfa-ad6f77fe1bd5","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"5e60b729-52b1-43a4-b514-67c976206458","type":"Circle"},{"attributes":{},"id":"afb4f70f-3073-4537-bb6e-eb49e58cd3da","type":"HelpTool"},{"attributes":{"callback":null,"tabs":[{"id":"1c8d88e5-5598-46bb-b884-ffbf8852a220","type":"Panel"},{"id":"998364fb-deda-4735-9a9b-0aca265ac63e","type":"Panel"}]},"id":"ba542556-586c-4cb1-9252-c718b836915f","type":"Tabs"},{"attributes":{"source":{"id":"1a671639-9469-4a05-b7b8-38741adabcfe","type":"ColumnDataSource"}},"id":"59961b85-07c8-4a24-aafc-9d17d91ff0ea","type":"CDSView"},{"attributes":{"child":{"id":"3445b0c7-080b-485c-87fb-4f51b0643998","subtype":"Figure","type":"Plot"},"title":"circle"},"id":"1c8d88e5-5598-46bb-b884-ffbf8852a220","type":"Panel"},{"attributes":{},"id":"936b7acd-efa3-4175-8ab0-df5fdaf7d5ce","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"f3037c08-10a8-4a06-b91c-35f9acc5929b","type":"BasicTickFormatter"},"plot":{"id":"3445b0c7-080b-485c-87fb-4f51b0643998","subtype":"Figure","type":"Plot"},"ticker":{"id":"fde9e091-56b7-43e9-ab44-3e08a06cde4c","type":"BasicTicker"}},"id":"5ebc935a-358c-4bbd-b002-18d6aacb97a6","type":"LinearAxis"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"4ad52283-1fda-40f5-83cf-2fb4715bae39","type":"Line"},{"attributes":{},"id":"cfcaf96f-32c6-4c48-9f56-dcb6cec97617","type":"LinearScale"},{"attributes":{"callback":null},"id":"caae9c0c-6aba-4e85-bf3d-80871921eb93","type":"DataRange1d"},{"attributes":{},"id":"a71800c8-d2f3-475a-9b6a-023ba79b01ed","type":"BasicTicker"},{"attributes":{"source":{"id":"f461348b-662c-443e-964e-03ca77cfc71f","type":"ColumnDataSource"}},"id":"52484009-b41c-4d58-be79-1c40eccde84a","type":"CDSView"},{"attributes":{"callback":null},"id":"805f2184-be0b-4828-ba02-4628e2178dd1","type":"DataRange1d"},{"attributes":{},"id":"dacb1ceb-f774-46f1-88f7-dac02002d2d5","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"970f0b72-08e4-4ce4-86c6-83fdd047ac8d","type":"Circle"},{"attributes":{},"id":"6cb675d7-2079-4ce0-99a9-a6388d18242b","type":"BasicTicker"},{"attributes":{"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"0283de55-6439-4b63-b595-9a7ba1ac0953","type":"Line"},{"attributes":{"callback":null},"id":"a57955cd-2215-4a51-abcd-b66203125381","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"3445b0c7-080b-485c-87fb-4f51b0643998","subtype":"Figure","type":"Plot"},"ticker":{"id":"a71800c8-d2f3-475a-9b6a-023ba79b01ed","type":"BasicTicker"}},"id":"94e7c61a-accf-4286-9aaa-c320d45980a3","type":"Grid"},{"attributes":{"callback":null},"id":"10329676-c2eb-408b-a33e-e31c1c1904ab","type":"DataRange1d"},{"attributes":{},"id":"99772f74-73dd-4db8-a86e-fd1a66a2eeb0","type":"LinearScale"},{"attributes":{"plot":null,"text":""},"id":"275af8ee-c9ff-4e29-acf0-928f5ee6e613","type":"Title"},{"attributes":{"dimension":1,"plot":{"id":"f0e3d605-c8c2-4b67-a97d-40399140b2ee","subtype":"Figure","type":"Plot"},"ticker":{"id":"6cb675d7-2079-4ce0-99a9-a6388d18242b","type":"BasicTicker"}},"id":"a60983b8-ae88-471a-bfe5-85712c1c56f7","type":"Grid"},{"attributes":{},"id":"806e1519-bc9f-4c06-b9b7-2f1d9e3ea4f1","type":"WheelZoomTool"},{"attributes":{},"id":"3a0f37ca-49db-4adb-835f-0dcfa1adf2b8","type":"HelpTool"},{"attributes":{},"id":"514ed0f1-194b-45b1-bf75-2cf8fd72d6bf","type":"LinearScale"},{"attributes":{},"id":"b950898e-eeaf-4ea1-bf52-f2b7220e09a3","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"9c906fb0-9650-4c80-9eb5-c4d3d518faa2","type":"BasicTickFormatter"},"plot":{"id":"3445b0c7-080b-485c-87fb-4f51b0643998","subtype":"Figure","type":"Plot"},"ticker":{"id":"a71800c8-d2f3-475a-9b6a-023ba79b01ed","type":"BasicTicker"}},"id":"9b8c4b2b-a94a-4171-b53d-b782e3699db9","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"84315a60-82d9-4b71-a955-6a8ce497d94b","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"f461348b-662c-443e-964e-03ca77cfc71f","type":"ColumnDataSource"},"glyph":{"id":"970f0b72-08e4-4ce4-86c6-83fdd047ac8d","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5e60b729-52b1-43a4-b514-67c976206458","type":"Circle"},"selection_glyph":null,"view":{"id":"52484009-b41c-4d58-be79-1c40eccde84a","type":"CDSView"}},"id":"bf2c7238-a4f8-44e0-bb8e-d5b493511d6f","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"e9c69f44-eec1-41f0-8c03-5d47b556fe27","type":"PanTool"},{"id":"b950898e-eeaf-4ea1-bf52-f2b7220e09a3","type":"WheelZoomTool"},{"id":"fe2b7af9-538a-4e97-a7d3-af10b52a6551","type":"BoxZoomTool"},{"id":"2f048333-ad52-41af-8c8e-471210e3fa9f","type":"SaveTool"},{"id":"c74b7b15-af5e-4ee4-aa14-0f9d10cc3f9a","type":"ResetTool"},{"id":"3a0f37ca-49db-4adb-835f-0dcfa1adf2b8","type":"HelpTool"}]},"id":"41414933-6dd5-46ee-b8a5-ae8a7819c538","type":"Toolbar"},{"attributes":{},"id":"f3037c08-10a8-4a06-b91c-35f9acc5929b","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"3445b0c7-080b-485c-87fb-4f51b0643998","subtype":"Figure","type":"Plot"},"ticker":{"id":"fde9e091-56b7-43e9-ab44-3e08a06cde4c","type":"BasicTicker"}},"id":"7a64c460-0a4e-4ec5-a14b-9436240019b3","type":"Grid"},{"attributes":{},"id":"c74b7b15-af5e-4ee4-aa14-0f9d10cc3f9a","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"c5dc9a94-c484-408b-9815-ce90cf765ba3","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"84315a60-82d9-4b71-a955-6a8ce497d94b","type":"BoxAnnotation"}},"id":"d555607f-805b-49a3-9dd8-13b0d65f4dc8","type":"BoxZoomTool"},{"attributes":{"child":{"id":"f0e3d605-c8c2-4b67-a97d-40399140b2ee","subtype":"Figure","type":"Plot"},"title":"line"},"id":"998364fb-deda-4735-9a9b-0aca265ac63e","type":"Panel"},{"attributes":{},"id":"dffeb17f-7576-40ae-ac1a-fbeff3928604","type":"PanTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]}},"id":"1a671639-9469-4a05-b7b8-38741adabcfe","type":"ColumnDataSource"},{"attributes":{},"id":"9c906fb0-9650-4c80-9eb5-c4d3d518faa2","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"c5dc9a94-c484-408b-9815-ce90cf765ba3","type":"BoxAnnotation"}},"id":"fe2b7af9-538a-4e97-a7d3-af10b52a6551","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"1a671639-9469-4a05-b7b8-38741adabcfe","type":"ColumnDataSource"},"glyph":{"id":"0283de55-6439-4b63-b595-9a7ba1ac0953","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4ad52283-1fda-40f5-83cf-2fb4715bae39","type":"Line"},"selection_glyph":null,"view":{"id":"59961b85-07c8-4a24-aafc-9d17d91ff0ea","type":"CDSView"}},"id":"a293a1c1-38ad-441b-9a54-62be823bc065","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"5ebc935a-358c-4bbd-b002-18d6aacb97a6","type":"LinearAxis"}],"left":[{"id":"9b8c4b2b-a94a-4171-b53d-b782e3699db9","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"5ebc935a-358c-4bbd-b002-18d6aacb97a6","type":"LinearAxis"},{"id":"7a64c460-0a4e-4ec5-a14b-9436240019b3","type":"Grid"},{"id":"9b8c4b2b-a94a-4171-b53d-b782e3699db9","type":"LinearAxis"},{"id":"94e7c61a-accf-4286-9aaa-c320d45980a3","type":"Grid"},{"id":"c5dc9a94-c484-408b-9815-ce90cf765ba3","type":"BoxAnnotation"},{"id":"bf2c7238-a4f8-44e0-bb8e-d5b493511d6f","type":"GlyphRenderer"}],"title":{"id":"f7aac2db-788f-4ca3-9ef7-b9e2c0ced744","type":"Title"},"toolbar":{"id":"41414933-6dd5-46ee-b8a5-ae8a7819c538","type":"Toolbar"},"x_range":{"id":"805f2184-be0b-4828-ba02-4628e2178dd1","type":"DataRange1d"},"x_scale":{"id":"cfcaf96f-32c6-4c48-9f56-dcb6cec97617","type":"LinearScale"},"y_range":{"id":"10329676-c2eb-408b-a33e-e31c1c1904ab","type":"DataRange1d"},"y_scale":{"id":"ec4ad7a4-0e2f-482c-b4f9-3b0d1eb17111","type":"LinearScale"}},"id":"3445b0c7-080b-485c-87fb-4f51b0643998","subtype":"Figure","type":"Plot"},{"attributes":{"plot":null,"text":""},"id":"f7aac2db-788f-4ca3-9ef7-b9e2c0ced744","type":"Title"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]}},"id":"f461348b-662c-443e-964e-03ca77cfc71f","type":"ColumnDataSource"},{"attributes":{},"id":"7782d034-41fb-4345-9854-b57d427b1f7d","type":"BasicTicker"},{"attributes":{},"id":"ec4ad7a4-0e2f-482c-b4f9-3b0d1eb17111","type":"LinearScale"},{"attributes":{},"id":"2f048333-ad52-41af-8c8e-471210e3fa9f","type":"SaveTool"},{"attributes":{"plot":{"id":"f0e3d605-c8c2-4b67-a97d-40399140b2ee","subtype":"Figure","type":"Plot"},"ticker":{"id":"7782d034-41fb-4345-9854-b57d427b1f7d","type":"BasicTicker"}},"id":"0431fc02-763c-4bb1-a2be-d642a4983bce","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"dffeb17f-7576-40ae-ac1a-fbeff3928604","type":"PanTool"},{"id":"806e1519-bc9f-4c06-b9b7-2f1d9e3ea4f1","type":"WheelZoomTool"},{"id":"d555607f-805b-49a3-9dd8-13b0d65f4dc8","type":"BoxZoomTool"},{"id":"e47467a1-c176-4c80-8070-19f72f9b2a63","type":"SaveTool"},{"id":"dacb1ceb-f774-46f1-88f7-dac02002d2d5","type":"ResetTool"},{"id":"afb4f70f-3073-4537-bb6e-eb49e58cd3da","type":"HelpTool"}]},"id":"d4c33059-b685-46f5-8a73-c07c67198435","type":"Toolbar"},{"attributes":{},"id":"fde9e091-56b7-43e9-ab44-3e08a06cde4c","type":"BasicTicker"},{"attributes":{"below":[{"id":"e39e5bcc-b5c7-49fa-abfa-ad6f77fe1bd5","type":"LinearAxis"}],"left":[{"id":"632b5797-043a-4532-9214-b22dc90340bd","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"e39e5bcc-b5c7-49fa-abfa-ad6f77fe1bd5","type":"LinearAxis"},{"id":"0431fc02-763c-4bb1-a2be-d642a4983bce","type":"Grid"},{"id":"632b5797-043a-4532-9214-b22dc90340bd","type":"LinearAxis"},{"id":"a60983b8-ae88-471a-bfe5-85712c1c56f7","type":"Grid"},{"id":"84315a60-82d9-4b71-a955-6a8ce497d94b","type":"BoxAnnotation"},{"id":"a293a1c1-38ad-441b-9a54-62be823bc065","type":"GlyphRenderer"}],"title":{"id":"275af8ee-c9ff-4e29-acf0-928f5ee6e613","type":"Title"},"toolbar":{"id":"d4c33059-b685-46f5-8a73-c07c67198435","type":"Toolbar"},"x_range":{"id":"caae9c0c-6aba-4e85-bf3d-80871921eb93","type":"DataRange1d"},"x_scale":{"id":"514ed0f1-194b-45b1-bf75-2cf8fd72d6bf","type":"LinearScale"},"y_range":{"id":"a57955cd-2215-4a51-abcd-b66203125381","type":"DataRange1d"},"y_scale":{"id":"99772f74-73dd-4db8-a86e-fd1a66a2eeb0","type":"LinearScale"}},"id":"f0e3d605-c8c2-4b67-a97d-40399140b2ee","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"d85be4ac-430f-4b2c-b1e9-1f283413106e","type":"BasicTickFormatter"}],"root_ids":["ba542556-586c-4cb1-9252-c718b836915f"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"ae693cbe-fa57-4156-86e3-8ba4f2034ab4","elementid":"2293a578-3175-4b92-98bf-6ae6c81c0a06","modelid":"ba542556-586c-4cb1-9252-c718b836915f"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
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
