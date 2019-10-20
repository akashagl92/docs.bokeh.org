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
      };var element = document.getElementById("1c6a5912-5fad-4617-9d40-ee1e0bc79f75");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '1c6a5912-5fad-4617-9d40-ee1e0bc79f75' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                var docs_json = {"0cfbf3f8-93d6-4e21-94a7-e57f913839d5":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"893d75e5-0ab5-463c-a5e1-bbb4a3f530ab","type":"Circle"},{"attributes":{"callback":null},"id":"faecdf64-c64b-47f4-8e6e-7ad8b67ac789","type":"DataRange1d"},{"attributes":{"below":[{"id":"0fb2233e-c0f1-4a57-9f3d-122a910a2490","type":"LinearAxis"}],"left":[{"id":"86823a98-6e97-44e1-8fa3-b9c90d2c2dfa","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"0fb2233e-c0f1-4a57-9f3d-122a910a2490","type":"LinearAxis"},{"id":"44887bda-5311-4dd2-82c5-672f25db4b51","type":"Grid"},{"id":"86823a98-6e97-44e1-8fa3-b9c90d2c2dfa","type":"LinearAxis"},{"id":"232c15a9-1ae5-48f4-9d50-454897283cba","type":"Grid"},{"id":"b952e39c-2a1b-49db-b149-87ce8164e293","type":"BoxAnnotation"},{"id":"8c57b416-c146-4c80-af17-bb8ad1ae7cfc","type":"GlyphRenderer"}],"title":{"id":"a2a03ea1-f420-4565-a419-0ec67a376ad7","type":"Title"},"tool_events":{"id":"c07868a6-bb1e-4f9b-a8a4-d08e3a4808c7","type":"ToolEvents"},"toolbar":{"id":"784bd516-f281-46f3-90cb-7007d17e651e","type":"Toolbar"},"x_range":{"id":"faecdf64-c64b-47f4-8e6e-7ad8b67ac789","type":"DataRange1d"},"y_range":{"id":"9e3d34aa-8087-43a4-bca9-9c27c44d4d1b","type":"DataRange1d"}},"id":"e6cb09a0-f564-48b3-8f47-1f2c5f930f6a","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"e6cb09a0-f564-48b3-8f47-1f2c5f930f6a","subtype":"Figure","type":"Plot"}},"id":"04769bb8-69a3-4770-a533-1b1ea98c58b2","type":"ResetTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"77edd1d4-bf36-4a08-b114-f9d43a3cd1bb","type":"PanTool"},{"id":"a0187115-eb35-4a31-a228-181fab0ca92d","type":"WheelZoomTool"},{"id":"00bf8b46-ec4c-4a59-aaae-992fd3fe2c24","type":"BoxZoomTool"},{"id":"3eb14732-5527-445b-83c0-ccad178b8ad7","type":"SaveTool"},{"id":"04769bb8-69a3-4770-a533-1b1ea98c58b2","type":"ResetTool"},{"id":"4e5c345c-6262-46b2-bedb-6a5e126c24e0","type":"HelpTool"}]},"id":"784bd516-f281-46f3-90cb-7007d17e651e","type":"Toolbar"},{"attributes":{"formatter":{"id":"6fb321b4-eac5-477b-aaee-9c3e184eb2b6","type":"BasicTickFormatter"},"plot":{"id":"e6cb09a0-f564-48b3-8f47-1f2c5f930f6a","subtype":"Figure","type":"Plot"},"ticker":{"id":"a7166f25-1f61-425b-be01-7313aef9136e","type":"BasicTicker"}},"id":"0fb2233e-c0f1-4a57-9f3d-122a910a2490","type":"LinearAxis"},{"attributes":{},"id":"c07868a6-bb1e-4f9b-a8a4-d08e3a4808c7","type":"ToolEvents"},{"attributes":{"band_fill_alpha":{"value":0.1},"band_fill_color":{"value":"navy"},"dimension":1,"plot":{"id":"e6cb09a0-f564-48b3-8f47-1f2c5f930f6a","subtype":"Figure","type":"Plot"},"ticker":{"id":"e4dd76cd-ebd0-4610-864b-f64c0b42d761","type":"BasicTicker"}},"id":"232c15a9-1ae5-48f4-9d50-454897283cba","type":"Grid"},{"attributes":{},"id":"a7166f25-1f61-425b-be01-7313aef9136e","type":"BasicTicker"},{"attributes":{"callback":null},"id":"9e3d34aa-8087-43a4-bca9-9c27c44d4d1b","type":"DataRange1d"},{"attributes":{"plot":null,"text":""},"id":"a2a03ea1-f420-4565-a419-0ec67a376ad7","type":"Title"},{"attributes":{"overlay":{"id":"b952e39c-2a1b-49db-b149-87ce8164e293","type":"BoxAnnotation"},"plot":{"id":"e6cb09a0-f564-48b3-8f47-1f2c5f930f6a","subtype":"Figure","type":"Plot"}},"id":"00bf8b46-ec4c-4a59-aaae-992fd3fe2c24","type":"BoxZoomTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"a48721f6-2902-4cbc-9055-1899c2706f53","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"9b46703b-032b-4258-8806-2fea3acfdd90","type":"Circle"},{"attributes":{},"id":"1fc00b24-34e7-4eac-8a68-72b66ef1753c","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"e6cb09a0-f564-48b3-8f47-1f2c5f930f6a","subtype":"Figure","type":"Plot"}},"id":"3eb14732-5527-445b-83c0-ccad178b8ad7","type":"SaveTool"},{"attributes":{"plot":{"id":"e6cb09a0-f564-48b3-8f47-1f2c5f930f6a","subtype":"Figure","type":"Plot"}},"id":"77edd1d4-bf36-4a08-b114-f9d43a3cd1bb","type":"PanTool"},{"attributes":{},"id":"e4dd76cd-ebd0-4610-864b-f64c0b42d761","type":"BasicTicker"},{"attributes":{"formatter":{"id":"1fc00b24-34e7-4eac-8a68-72b66ef1753c","type":"BasicTickFormatter"},"plot":{"id":"e6cb09a0-f564-48b3-8f47-1f2c5f930f6a","subtype":"Figure","type":"Plot"},"ticker":{"id":"e4dd76cd-ebd0-4610-864b-f64c0b42d761","type":"BasicTicker"}},"id":"86823a98-6e97-44e1-8fa3-b9c90d2c2dfa","type":"LinearAxis"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"e6cb09a0-f564-48b3-8f47-1f2c5f930f6a","subtype":"Figure","type":"Plot"},"ticker":{"id":"a7166f25-1f61-425b-be01-7313aef9136e","type":"BasicTicker"}},"id":"44887bda-5311-4dd2-82c5-672f25db4b51","type":"Grid"},{"attributes":{"plot":{"id":"e6cb09a0-f564-48b3-8f47-1f2c5f930f6a","subtype":"Figure","type":"Plot"}},"id":"a0187115-eb35-4a31-a228-181fab0ca92d","type":"WheelZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"b952e39c-2a1b-49db-b149-87ce8164e293","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"e6cb09a0-f564-48b3-8f47-1f2c5f930f6a","subtype":"Figure","type":"Plot"}},"id":"4e5c345c-6262-46b2-bedb-6a5e126c24e0","type":"HelpTool"},{"attributes":{},"id":"6fb321b4-eac5-477b-aaee-9c3e184eb2b6","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"a48721f6-2902-4cbc-9055-1899c2706f53","type":"ColumnDataSource"},"glyph":{"id":"9b46703b-032b-4258-8806-2fea3acfdd90","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"893d75e5-0ab5-463c-a5e1-bbb4a3f530ab","type":"Circle"},"selection_glyph":null},"id":"8c57b416-c146-4c80-af17-bb8ad1ae7cfc","type":"GlyphRenderer"}],"root_ids":["e6cb09a0-f564-48b3-8f47-1f2c5f930f6a"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"0cfbf3f8-93d6-4e21-94a7-e57f913839d5","elementid":"1c6a5912-5fad-4617-9d40-ee1e0bc79f75","modelid":"e6cb09a0-f564-48b3-8f47-1f2c5f930f6a"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
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
