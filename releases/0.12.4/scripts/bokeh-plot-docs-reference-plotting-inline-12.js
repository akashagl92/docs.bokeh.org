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
      };var element = document.getElementById("a5d3dca7-b140-40e3-b6bd-3a69e741944b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a5d3dca7-b140-40e3-b6bd-3a69e741944b' but no matching script tag was found. ")
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
                var docs_json = {"7415a84f-6114-481f-bed7-104e912c4e06":{"roots":{"references":[{"attributes":{"line_color":{"field":"line_color"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"0ffee68b-3546-4b34-8cf5-377750fa9e2a","type":"MultiLine"},{"attributes":{},"id":"3b1ae2b7-cc7f-4b10-8e32-b3084025d4ad","type":"BasicTicker"},{"attributes":{"plot":{"id":"4825ea18-acf5-437c-a8f0-b9107be1c58e","subtype":"Figure","type":"Plot"},"ticker":{"id":"3b1ae2b7-cc7f-4b10-8e32-b3084025d4ad","type":"BasicTicker"}},"id":"02d833ea-ff04-43ff-86b2-379c08a8215d","type":"Grid"},{"attributes":{"callback":null,"column_names":["xs","ys","line_color"],"data":{"line_color":["red","green"],"xs":[[1,2,3],[2,3,4]],"ys":[[6,7,2],[4,5,7]]}},"id":"72ef6bf4-4c71-4214-9c25-f19df87e9d22","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"fb2ce14e-10dc-4200-8314-a102fdbfbcc8","type":"LinearAxis"}],"left":[{"id":"c9a5bd63-596a-4e5e-b120-9a1312ad7d13","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"fb2ce14e-10dc-4200-8314-a102fdbfbcc8","type":"LinearAxis"},{"id":"02d833ea-ff04-43ff-86b2-379c08a8215d","type":"Grid"},{"id":"c9a5bd63-596a-4e5e-b120-9a1312ad7d13","type":"LinearAxis"},{"id":"c483ec24-df26-41cd-8194-4328d1e27cba","type":"Grid"},{"id":"f2e773a3-05ce-47c4-98ec-464f2d1eb184","type":"BoxAnnotation"},{"id":"ba45f81c-d057-4c19-9fcf-5a6ff913e497","type":"GlyphRenderer"}],"title":{"id":"dd325604-6840-4e27-bd1c-70072dfafa3a","type":"Title"},"tool_events":{"id":"8ced908c-cc57-4c8a-a274-d37e7bf4ac15","type":"ToolEvents"},"toolbar":{"id":"c3112e05-b2ac-44bb-80d2-2d346dac94d9","type":"Toolbar"},"x_range":{"id":"47bb7d03-f055-46e3-9fc3-08f642502a7f","type":"DataRange1d"},"y_range":{"id":"f1c89015-6dbe-48f2-bc9e-4b5d81ad6355","type":"DataRange1d"}},"id":"4825ea18-acf5-437c-a8f0-b9107be1c58e","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"4825ea18-acf5-437c-a8f0-b9107be1c58e","subtype":"Figure","type":"Plot"}},"id":"fbd74c51-28c5-452c-941a-5db74b7040d5","type":"HelpTool"},{"attributes":{"overlay":{"id":"f2e773a3-05ce-47c4-98ec-464f2d1eb184","type":"BoxAnnotation"},"plot":{"id":"4825ea18-acf5-437c-a8f0-b9107be1c58e","subtype":"Figure","type":"Plot"}},"id":"644a7a58-292d-48b8-b510-17d8a2fb6678","type":"BoxZoomTool"},{"attributes":{},"id":"f5fc3e52-a9ad-47d5-b1ff-f6dad129cd85","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"4825ea18-acf5-437c-a8f0-b9107be1c58e","subtype":"Figure","type":"Plot"}},"id":"4ed215d2-9a45-40cf-be28-c78a31c5b413","type":"PanTool"},{"attributes":{"formatter":{"id":"f5fc3e52-a9ad-47d5-b1ff-f6dad129cd85","type":"BasicTickFormatter"},"plot":{"id":"4825ea18-acf5-437c-a8f0-b9107be1c58e","subtype":"Figure","type":"Plot"},"ticker":{"id":"3b1ae2b7-cc7f-4b10-8e32-b3084025d4ad","type":"BasicTicker"}},"id":"fb2ce14e-10dc-4200-8314-a102fdbfbcc8","type":"LinearAxis"},{"attributes":{"callback":null},"id":"47bb7d03-f055-46e3-9fc3-08f642502a7f","type":"DataRange1d"},{"attributes":{"callback":null},"id":"f1c89015-6dbe-48f2-bc9e-4b5d81ad6355","type":"DataRange1d"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"f3b0152a-c875-401a-bfb8-d91431de1461","type":"MultiLine"},{"attributes":{"formatter":{"id":"56c30acb-e237-4aed-9e43-ebc847becc8c","type":"BasicTickFormatter"},"plot":{"id":"4825ea18-acf5-437c-a8f0-b9107be1c58e","subtype":"Figure","type":"Plot"},"ticker":{"id":"fdd2a676-9eb6-4d50-a3fd-bea66ce11473","type":"BasicTicker"}},"id":"c9a5bd63-596a-4e5e-b120-9a1312ad7d13","type":"LinearAxis"},{"attributes":{},"id":"56c30acb-e237-4aed-9e43-ebc847becc8c","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"72ef6bf4-4c71-4214-9c25-f19df87e9d22","type":"ColumnDataSource"},"glyph":{"id":"0ffee68b-3546-4b34-8cf5-377750fa9e2a","type":"MultiLine"},"hover_glyph":null,"nonselection_glyph":{"id":"f3b0152a-c875-401a-bfb8-d91431de1461","type":"MultiLine"},"selection_glyph":null},"id":"ba45f81c-d057-4c19-9fcf-5a6ff913e497","type":"GlyphRenderer"},{"attributes":{},"id":"fdd2a676-9eb6-4d50-a3fd-bea66ce11473","type":"BasicTicker"},{"attributes":{"plot":{"id":"4825ea18-acf5-437c-a8f0-b9107be1c58e","subtype":"Figure","type":"Plot"}},"id":"763dd049-6e37-4bb4-97f1-1f7ec468f407","type":"SaveTool"},{"attributes":{"plot":{"id":"4825ea18-acf5-437c-a8f0-b9107be1c58e","subtype":"Figure","type":"Plot"}},"id":"8c2eea2a-1ea2-4311-9b39-134f71252d8e","type":"WheelZoomTool"},{"attributes":{"plot":null,"text":""},"id":"dd325604-6840-4e27-bd1c-70072dfafa3a","type":"Title"},{"attributes":{},"id":"8ced908c-cc57-4c8a-a274-d37e7bf4ac15","type":"ToolEvents"},{"attributes":{"dimension":1,"plot":{"id":"4825ea18-acf5-437c-a8f0-b9107be1c58e","subtype":"Figure","type":"Plot"},"ticker":{"id":"fdd2a676-9eb6-4d50-a3fd-bea66ce11473","type":"BasicTicker"}},"id":"c483ec24-df26-41cd-8194-4328d1e27cba","type":"Grid"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"4ed215d2-9a45-40cf-be28-c78a31c5b413","type":"PanTool"},{"id":"8c2eea2a-1ea2-4311-9b39-134f71252d8e","type":"WheelZoomTool"},{"id":"644a7a58-292d-48b8-b510-17d8a2fb6678","type":"BoxZoomTool"},{"id":"763dd049-6e37-4bb4-97f1-1f7ec468f407","type":"SaveTool"},{"id":"1db5f5b9-0d59-44e8-9756-79e453770e95","type":"ResetTool"},{"id":"fbd74c51-28c5-452c-941a-5db74b7040d5","type":"HelpTool"}]},"id":"c3112e05-b2ac-44bb-80d2-2d346dac94d9","type":"Toolbar"},{"attributes":{"plot":{"id":"4825ea18-acf5-437c-a8f0-b9107be1c58e","subtype":"Figure","type":"Plot"}},"id":"1db5f5b9-0d59-44e8-9756-79e453770e95","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"f2e773a3-05ce-47c4-98ec-464f2d1eb184","type":"BoxAnnotation"}],"root_ids":["4825ea18-acf5-437c-a8f0-b9107be1c58e"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"7415a84f-6114-481f-bed7-104e912c4e06","elementid":"a5d3dca7-b140-40e3-b6bd-3a69e741944b","modelid":"4825ea18-acf5-437c-a8f0-b9107be1c58e"}];
                
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
