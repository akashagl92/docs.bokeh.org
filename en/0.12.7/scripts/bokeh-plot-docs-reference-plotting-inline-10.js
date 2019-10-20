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
      };var element = document.getElementById("47b2511f-d923-4091-ba53-d95b91810cfd");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '47b2511f-d923-4091-ba53-d95b91810cfd' but no matching script tag was found. ")
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
                var docs_json = {"729ac7f1-3935-4164-94ca-c982687ce9c8":{"roots":{"references":[{"attributes":{},"id":"be1463bd-2689-44c1-a315-8fee49e40efc","type":"PanTool"},{"attributes":{"source":{"id":"d28fac84-2320-4195-80ef-545aaa3c2deb","type":"ColumnDataSource"}},"id":"fd19f772-ccdc-48e5-9b84-a2650cc2ee8e","type":"CDSView"},{"attributes":{"data_source":{"id":"d28fac84-2320-4195-80ef-545aaa3c2deb","type":"ColumnDataSource"},"glyph":{"id":"db9091ea-1cd5-4926-993d-9fb9e7b3e66a","type":"InvertedTriangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6c1eb25b-7240-418a-b737-d2742750ffc3","type":"InvertedTriangle"},"selection_glyph":null,"view":{"id":"fd19f772-ccdc-48e5-9b84-a2650cc2ee8e","type":"CDSView"}},"id":"78117746-a8f3-4f1d-83e3-c03b0c89fe50","type":"GlyphRenderer"},{"attributes":{},"id":"02beb5b1-614c-4dac-be31-5e087ae7d408","type":"WheelZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"be1463bd-2689-44c1-a315-8fee49e40efc","type":"PanTool"},{"id":"02beb5b1-614c-4dac-be31-5e087ae7d408","type":"WheelZoomTool"},{"id":"a9f84aec-4bd9-4efa-9932-fc4eea0a3914","type":"BoxZoomTool"},{"id":"bbf60f9f-5467-49b3-9502-6d1c9de89684","type":"SaveTool"},{"id":"38c7e2cb-21ac-4125-857f-c44fd7362132","type":"ResetTool"},{"id":"9ddeb3cd-c0fa-47bf-afb7-84198d07636b","type":"HelpTool"}]},"id":"cf048bab-f118-4902-b821-d80bfb95727b","type":"Toolbar"},{"attributes":{"overlay":{"id":"8df4b8ff-6e9c-4e77-ac7d-7d9292432e36","type":"BoxAnnotation"}},"id":"a9f84aec-4bd9-4efa-9932-fc4eea0a3914","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"69f9ff81-9409-4db0-87e9-fd735ad0575f","type":"DataRange1d"},{"attributes":{},"id":"bbf60f9f-5467-49b3-9502-6d1c9de89684","type":"SaveTool"},{"attributes":{"fill_color":{"value":"#DE2D26"},"line_color":{"value":"#DE2D26"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"db9091ea-1cd5-4926-993d-9fb9e7b3e66a","type":"InvertedTriangle"},{"attributes":{},"id":"38c7e2cb-21ac-4125-857f-c44fd7362132","type":"ResetTool"},{"attributes":{"callback":null},"id":"f6dc0da3-7c25-423f-a71a-f66633cf018c","type":"DataRange1d"},{"attributes":{},"id":"9ddeb3cd-c0fa-47bf-afb7-84198d07636b","type":"HelpTool"},{"attributes":{},"id":"9cdada4d-7d95-466c-80ea-97616979f25d","type":"LinearScale"},{"attributes":{"plot":null,"text":""},"id":"06ff6711-773a-4a5e-ae26-3db0b8734544","type":"Title"},{"attributes":{},"id":"b1e96166-287b-447a-afbf-6e7049346ee5","type":"LinearScale"},{"attributes":{"plot":{"id":"af1ffc5a-6673-4b24-a09b-85e23510c097","subtype":"Figure","type":"Plot"},"ticker":{"id":"066ff180-a6fc-4cdf-9102-b6006ab8ddd2","type":"BasicTicker"}},"id":"e8b8dfe3-ac92-4c1a-9347-8c73d1a83994","type":"Grid"},{"attributes":{"formatter":{"id":"f07eb4f8-a998-433b-82ea-b2013b14030f","type":"BasicTickFormatter"},"plot":{"id":"af1ffc5a-6673-4b24-a09b-85e23510c097","subtype":"Figure","type":"Plot"},"ticker":{"id":"066ff180-a6fc-4cdf-9102-b6006ab8ddd2","type":"BasicTicker"}},"id":"c6818b0f-12aa-47a8-a455-51377f904b9a","type":"LinearAxis"},{"attributes":{},"id":"370cfe54-289c-4063-879d-5cabb20900ca","type":"BasicTickFormatter"},{"attributes":{},"id":"066ff180-a6fc-4cdf-9102-b6006ab8ddd2","type":"BasicTicker"},{"attributes":{"formatter":{"id":"370cfe54-289c-4063-879d-5cabb20900ca","type":"BasicTickFormatter"},"plot":{"id":"af1ffc5a-6673-4b24-a09b-85e23510c097","subtype":"Figure","type":"Plot"},"ticker":{"id":"79d0f094-a7f6-4c3f-abbf-f2be1300f4e1","type":"BasicTicker"}},"id":"2eec4c8f-ec58-4831-99cc-eb48d40436d8","type":"LinearAxis"},{"attributes":{},"id":"79d0f094-a7f6-4c3f-abbf-f2be1300f4e1","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"af1ffc5a-6673-4b24-a09b-85e23510c097","subtype":"Figure","type":"Plot"},"ticker":{"id":"79d0f094-a7f6-4c3f-abbf-f2be1300f4e1","type":"BasicTicker"}},"id":"46722aab-2adc-4fb3-a88d-d2c73dec8e53","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"6c1eb25b-7240-418a-b737-d2742750ffc3","type":"InvertedTriangle"},{"attributes":{},"id":"f07eb4f8-a998-433b-82ea-b2013b14030f","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"d28fac84-2320-4195-80ef-545aaa3c2deb","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"8df4b8ff-6e9c-4e77-ac7d-7d9292432e36","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"c6818b0f-12aa-47a8-a455-51377f904b9a","type":"LinearAxis"}],"left":[{"id":"2eec4c8f-ec58-4831-99cc-eb48d40436d8","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"c6818b0f-12aa-47a8-a455-51377f904b9a","type":"LinearAxis"},{"id":"e8b8dfe3-ac92-4c1a-9347-8c73d1a83994","type":"Grid"},{"id":"2eec4c8f-ec58-4831-99cc-eb48d40436d8","type":"LinearAxis"},{"id":"46722aab-2adc-4fb3-a88d-d2c73dec8e53","type":"Grid"},{"id":"8df4b8ff-6e9c-4e77-ac7d-7d9292432e36","type":"BoxAnnotation"},{"id":"78117746-a8f3-4f1d-83e3-c03b0c89fe50","type":"GlyphRenderer"}],"title":{"id":"06ff6711-773a-4a5e-ae26-3db0b8734544","type":"Title"},"toolbar":{"id":"cf048bab-f118-4902-b821-d80bfb95727b","type":"Toolbar"},"x_range":{"id":"69f9ff81-9409-4db0-87e9-fd735ad0575f","type":"DataRange1d"},"x_scale":{"id":"9cdada4d-7d95-466c-80ea-97616979f25d","type":"LinearScale"},"y_range":{"id":"f6dc0da3-7c25-423f-a71a-f66633cf018c","type":"DataRange1d"},"y_scale":{"id":"b1e96166-287b-447a-afbf-6e7049346ee5","type":"LinearScale"}},"id":"af1ffc5a-6673-4b24-a09b-85e23510c097","subtype":"Figure","type":"Plot"}],"root_ids":["af1ffc5a-6673-4b24-a09b-85e23510c097"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"729ac7f1-3935-4164-94ca-c982687ce9c8","elementid":"47b2511f-d923-4091-ba53-d95b91810cfd","modelid":"af1ffc5a-6673-4b24-a09b-85e23510c097"}];
                
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
