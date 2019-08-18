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
      };var element = document.getElementById("1fcc0865-bbf8-45bb-a801-29b5afb7f2e9");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '1fcc0865-bbf8-45bb-a801-29b5afb7f2e9' but no matching script tag was found. ")
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
                var docs_json = {"801f4f26-95a1-4143-a671-6a4aadb36e2e":{"roots":{"references":[{"attributes":{"data_source":{"id":"6268ab14-970d-4c40-bfea-b7cd47e4ad39","type":"ColumnDataSource"},"glyph":{"id":"942938ca-a13a-4d4a-b4e1-f147fd345450","type":"HBar"},"hover_glyph":null,"nonselection_glyph":{"id":"57025791-3a59-49ef-8bf6-9eb1b0ee1b64","type":"HBar"},"selection_glyph":null},"id":"517c1736-1f50-4a7d-9f8b-1dbf0929af97","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"6a0bc2ab-b1cd-47ec-8715-fac82b82a43c","type":"BoxAnnotation"},"plot":{"id":"8cad8629-0f21-4218-b465-26befb604bde","subtype":"Figure","type":"Plot"}},"id":"6dc712c1-4557-42e5-a8b9-f9a5b7ebb981","type":"BoxZoomTool"},{"attributes":{},"id":"7157ec60-ff4b-4fed-b84c-005c848d9c3a","type":"ToolEvents"},{"attributes":{},"id":"aefab0cb-b378-4c4c-878c-32f718d5c2fc","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"8cad8629-0f21-4218-b465-26befb604bde","subtype":"Figure","type":"Plot"}},"id":"77805610-135b-48e2-93c8-dd94b735e3a5","type":"PanTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"77805610-135b-48e2-93c8-dd94b735e3a5","type":"PanTool"},{"id":"78e389ee-2ec2-486d-9a35-360aeb80b3bb","type":"WheelZoomTool"},{"id":"6dc712c1-4557-42e5-a8b9-f9a5b7ebb981","type":"BoxZoomTool"},{"id":"e797aa71-efcd-43f4-b3bf-747e1f05e7b6","type":"SaveTool"},{"id":"b1dce54c-d1fa-419e-9edd-af7a218fcfef","type":"ResetTool"},{"id":"4553ff95-337a-4ce7-8392-e4fda776f4f0","type":"HelpTool"}]},"id":"14ac97fa-abfa-4c6a-83d2-b67ac97e6715","type":"Toolbar"},{"attributes":{},"id":"6c1071a1-3a34-44ae-8dd6-1a56fff79d6a","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"88e6090b-c3cb-4e56-baf2-7d22c808d07c","type":"DataRange1d"},{"attributes":{},"id":"1fe55e8c-e1fc-4081-b1ab-8b7e099502a6","type":"BasicTicker"},{"attributes":{"plot":{"id":"8cad8629-0f21-4218-b465-26befb604bde","subtype":"Figure","type":"Plot"}},"id":"e797aa71-efcd-43f4-b3bf-747e1f05e7b6","type":"SaveTool"},{"attributes":{"dimension":1,"plot":{"id":"8cad8629-0f21-4218-b465-26befb604bde","subtype":"Figure","type":"Plot"},"ticker":{"id":"1fe55e8c-e1fc-4081-b1ab-8b7e099502a6","type":"BasicTicker"}},"id":"6df2ad65-48f5-4374-a375-0d33a46b808f","type":"Grid"},{"attributes":{"formatter":{"id":"aefab0cb-b378-4c4c-878c-32f718d5c2fc","type":"BasicTickFormatter"},"plot":{"id":"8cad8629-0f21-4218-b465-26befb604bde","subtype":"Figure","type":"Plot"},"ticker":{"id":"a73b556d-63e2-41a4-a8a9-3f178c14565e","type":"BasicTicker"}},"id":"4ad86c92-fb89-47bd-992a-1860ab5da8c0","type":"LinearAxis"},{"attributes":{"below":[{"id":"4ad86c92-fb89-47bd-992a-1860ab5da8c0","type":"LinearAxis"}],"left":[{"id":"72127337-b4a3-42db-bc36-4268bc015b3f","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"4ad86c92-fb89-47bd-992a-1860ab5da8c0","type":"LinearAxis"},{"id":"ee152bd5-899f-4944-bb8e-6d86e4da6817","type":"Grid"},{"id":"72127337-b4a3-42db-bc36-4268bc015b3f","type":"LinearAxis"},{"id":"6df2ad65-48f5-4374-a375-0d33a46b808f","type":"Grid"},{"id":"6a0bc2ab-b1cd-47ec-8715-fac82b82a43c","type":"BoxAnnotation"},{"id":"517c1736-1f50-4a7d-9f8b-1dbf0929af97","type":"GlyphRenderer"}],"title":{"id":"54f53ce7-1bb8-4e0e-a208-32dcfa01dc16","type":"Title"},"tool_events":{"id":"7157ec60-ff4b-4fed-b84c-005c848d9c3a","type":"ToolEvents"},"toolbar":{"id":"14ac97fa-abfa-4c6a-83d2-b67ac97e6715","type":"Toolbar"},"x_range":{"id":"88e6090b-c3cb-4e56-baf2-7d22c808d07c","type":"DataRange1d"},"y_range":{"id":"6b8dcd19-c53e-457f-9fe8-1d29d219a4b3","type":"DataRange1d"}},"id":"8cad8629-0f21-4218-b465-26befb604bde","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"6a0bc2ab-b1cd-47ec-8715-fac82b82a43c","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"8cad8629-0f21-4218-b465-26befb604bde","subtype":"Figure","type":"Plot"},"ticker":{"id":"a73b556d-63e2-41a4-a8a9-3f178c14565e","type":"BasicTicker"}},"id":"ee152bd5-899f-4944-bb8e-6d86e4da6817","type":"Grid"},{"attributes":{"callback":null,"column_names":["y","right"],"data":{"right":[1.2,2.5,3.7],"y":[1,2,3]}},"id":"6268ab14-970d-4c40-bfea-b7cd47e4ad39","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"navy"},"height":{"value":0.5},"line_color":{"value":"navy"},"right":{"field":"right"},"y":{"field":"y"}},"id":"942938ca-a13a-4d4a-b4e1-f147fd345450","type":"HBar"},{"attributes":{"plot":{"id":"8cad8629-0f21-4218-b465-26befb604bde","subtype":"Figure","type":"Plot"}},"id":"78e389ee-2ec2-486d-9a35-360aeb80b3bb","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"6c1071a1-3a34-44ae-8dd6-1a56fff79d6a","type":"BasicTickFormatter"},"plot":{"id":"8cad8629-0f21-4218-b465-26befb604bde","subtype":"Figure","type":"Plot"},"ticker":{"id":"1fe55e8c-e1fc-4081-b1ab-8b7e099502a6","type":"BasicTicker"}},"id":"72127337-b4a3-42db-bc36-4268bc015b3f","type":"LinearAxis"},{"attributes":{"plot":{"id":"8cad8629-0f21-4218-b465-26befb604bde","subtype":"Figure","type":"Plot"}},"id":"b1dce54c-d1fa-419e-9edd-af7a218fcfef","type":"ResetTool"},{"attributes":{"plot":null,"text":""},"id":"54f53ce7-1bb8-4e0e-a208-32dcfa01dc16","type":"Title"},{"attributes":{},"id":"a73b556d-63e2-41a4-a8a9-3f178c14565e","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.5},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"field":"right"},"y":{"field":"y"}},"id":"57025791-3a59-49ef-8bf6-9eb1b0ee1b64","type":"HBar"},{"attributes":{"callback":null},"id":"6b8dcd19-c53e-457f-9fe8-1d29d219a4b3","type":"DataRange1d"},{"attributes":{"plot":{"id":"8cad8629-0f21-4218-b465-26befb604bde","subtype":"Figure","type":"Plot"}},"id":"4553ff95-337a-4ce7-8392-e4fda776f4f0","type":"HelpTool"}],"root_ids":["8cad8629-0f21-4218-b465-26befb604bde"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"801f4f26-95a1-4143-a671-6a4aadb36e2e","elementid":"1fcc0865-bbf8-45bb-a801-29b5afb7f2e9","modelid":"8cad8629-0f21-4218-b465-26befb604bde"}];
                
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
