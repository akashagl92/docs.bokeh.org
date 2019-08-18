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
      };var element = document.getElementById("6e95a9a6-481c-481c-91bd-30a14e9f0227");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '6e95a9a6-481c-481c-91bd-30a14e9f0227' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.js"];
    
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
                var docs_json = {"361c17b2-9c49-4091-8a85-92cf630545b2":{"roots":{"references":[{"attributes":{"formatter":{"id":"82b5fb80-79bb-406e-ab22-1576a1f8ae16","type":"BasicTickFormatter"},"plot":{"id":"4800391c-be4e-4735-870c-cd1f43821874","subtype":"Figure","type":"Plot"},"ticker":{"id":"6bda53ab-d94b-4b15-9adb-d0e87c6cf37b","type":"BasicTicker"}},"id":"0026f142-a24e-48fc-b153-6f7bf3d7d5af","type":"LinearAxis"},{"attributes":{},"id":"6ced1f5c-355a-4a8c-9649-5e988ec47839","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"0026f142-a24e-48fc-b153-6f7bf3d7d5af","type":"LinearAxis"}],"left":[{"id":"553e36d0-5bdc-44a0-a984-9522659900a4","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"0026f142-a24e-48fc-b153-6f7bf3d7d5af","type":"LinearAxis"},{"id":"429d09a5-4952-47a9-afa0-ae7e73ddc44b","type":"Grid"},{"id":"553e36d0-5bdc-44a0-a984-9522659900a4","type":"LinearAxis"},{"id":"1e15e5d5-7234-42d6-9bbf-fb5726d3822a","type":"Grid"},{"id":"4769a421-715f-4e57-a9b8-0bb01b9e8376","type":"BoxAnnotation"},{"id":"11c08692-b983-433a-93ab-4617cae0dc05","type":"GlyphRenderer"}],"title":{"id":"08c5057b-a103-4901-8c39-4450e533180a","type":"Title"},"tool_events":{"id":"70a87571-a5c0-4f0c-b165-46e9be421410","type":"ToolEvents"},"toolbar":{"id":"3e0be545-2092-435b-8d30-897de4657d84","type":"Toolbar"},"x_range":{"id":"efdbbb3b-e2b3-4cfa-9b3a-8dd1d2cbf348","type":"DataRange1d"},"y_range":{"id":"baf62931-cb7b-4edf-9afe-b8d5f15e7930","type":"DataRange1d"}},"id":"4800391c-be4e-4735-870c-cd1f43821874","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"4800391c-be4e-4735-870c-cd1f43821874","subtype":"Figure","type":"Plot"}},"id":"da346e11-d4c0-4225-a0cb-7d1ddd28a396","type":"WheelZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"4769a421-715f-4e57-a9b8-0bb01b9e8376","type":"BoxAnnotation"},{"attributes":{},"id":"6bda53ab-d94b-4b15-9adb-d0e87c6cf37b","type":"BasicTicker"},{"attributes":{"formatter":{"id":"6ced1f5c-355a-4a8c-9649-5e988ec47839","type":"BasicTickFormatter"},"plot":{"id":"4800391c-be4e-4735-870c-cd1f43821874","subtype":"Figure","type":"Plot"},"ticker":{"id":"26108fb1-d30a-4c71-842f-0d315ae0a512","type":"BasicTicker"}},"id":"553e36d0-5bdc-44a0-a984-9522659900a4","type":"LinearAxis"},{"attributes":{"plot":{"id":"4800391c-be4e-4735-870c-cd1f43821874","subtype":"Figure","type":"Plot"}},"id":"1c283b14-f077-458c-910c-34f02e4ef628","type":"HelpTool"},{"attributes":{"callback":null},"id":"efdbbb3b-e2b3-4cfa-9b3a-8dd1d2cbf348","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"b612f18c-b87a-46e6-b424-980ac3aa2773","type":"PanTool"},{"id":"da346e11-d4c0-4225-a0cb-7d1ddd28a396","type":"WheelZoomTool"},{"id":"fe4e0b09-7ceb-4e4c-a742-30d77cc6df87","type":"BoxZoomTool"},{"id":"4e4c9ed8-2d07-4bf8-b905-c73c7cf5a48e","type":"SaveTool"},{"id":"8da85fe0-0c06-428a-ab29-200a591b922f","type":"ResetTool"},{"id":"1c283b14-f077-458c-910c-34f02e4ef628","type":"HelpTool"}]},"id":"3e0be545-2092-435b-8d30-897de4657d84","type":"Toolbar"},{"attributes":{"plot":null,"text":""},"id":"08c5057b-a103-4901-8c39-4450e533180a","type":"Title"},{"attributes":{"plot":{"id":"4800391c-be4e-4735-870c-cd1f43821874","subtype":"Figure","type":"Plot"},"ticker":{"id":"6bda53ab-d94b-4b15-9adb-d0e87c6cf37b","type":"BasicTicker"}},"id":"429d09a5-4952-47a9-afa0-ae7e73ddc44b","type":"Grid"},{"attributes":{},"id":"70a87571-a5c0-4f0c-b165-46e9be421410","type":"ToolEvents"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"fb7f02ec-454f-41fd-a08a-2f0471ed530d","type":"Patch"},{"attributes":{},"id":"26108fb1-d30a-4c71-842f-0d315ae0a512","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"4800391c-be4e-4735-870c-cd1f43821874","subtype":"Figure","type":"Plot"},"ticker":{"id":"26108fb1-d30a-4c71-842f-0d315ae0a512","type":"BasicTicker"}},"id":"1e15e5d5-7234-42d6-9bbf-fb5726d3822a","type":"Grid"},{"attributes":{"overlay":{"id":"4769a421-715f-4e57-a9b8-0bb01b9e8376","type":"BoxAnnotation"},"plot":{"id":"4800391c-be4e-4735-870c-cd1f43821874","subtype":"Figure","type":"Plot"}},"id":"fe4e0b09-7ceb-4e4c-a742-30d77cc6df87","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"4800391c-be4e-4735-870c-cd1f43821874","subtype":"Figure","type":"Plot"}},"id":"8da85fe0-0c06-428a-ab29-200a591b922f","type":"ResetTool"},{"attributes":{"callback":null},"id":"baf62931-cb7b-4edf-9afe-b8d5f15e7930","type":"DataRange1d"},{"attributes":{},"id":"82b5fb80-79bb-406e-ab22-1576a1f8ae16","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"4800391c-be4e-4735-870c-cd1f43821874","subtype":"Figure","type":"Plot"}},"id":"4e4c9ed8-2d07-4bf8-b905-c73c7cf5a48e","type":"SaveTool"},{"attributes":{"data_source":{"id":"7cb49057-a086-48ee-937f-75373c4466d3","type":"ColumnDataSource"},"glyph":{"id":"fb7f02ec-454f-41fd-a08a-2f0471ed530d","type":"Patch"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1d62526b-5244-46e9-9fe8-f78e9f5bcc91","type":"Patch"},"selection_glyph":null},"id":"11c08692-b983-433a-93ab-4617cae0dc05","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,"NaN",4,5,6],"y":[6,7,5,"NaN",7,3,6]}},"id":"7cb49057-a086-48ee-937f-75373c4466d3","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"1d62526b-5244-46e9-9fe8-f78e9f5bcc91","type":"Patch"},{"attributes":{"plot":{"id":"4800391c-be4e-4735-870c-cd1f43821874","subtype":"Figure","type":"Plot"}},"id":"b612f18c-b87a-46e6-b424-980ac3aa2773","type":"PanTool"}],"root_ids":["4800391c-be4e-4735-870c-cd1f43821874"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"361c17b2-9c49-4091-8a85-92cf630545b2","elementid":"6e95a9a6-481c-481c-91bd-30a14e9f0227","modelid":"4800391c-be4e-4735-870c-cd1f43821874"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
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
