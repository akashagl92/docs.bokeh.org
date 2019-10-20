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
      };var element = document.getElementById("3374a871-21a0-43fa-8ee4-02e6eb83ef4e");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '3374a871-21a0-43fa-8ee4-02e6eb83ef4e' but no matching script tag was found. ")
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
                  var docs_json = {"af9b8a97-aca5-4e70-b2d0-4cb1ab92f9b6":{"roots":{"references":[{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"e004d683-1950-4459-b08b-d14f83d04a2f","type":"Line"},{"attributes":{"plot":{"id":"f16d4b38-587e-4b78-8460-db3ef89c53a9","subtype":"Figure","type":"Plot"}},"id":"45ab97ec-0a41-48d1-aff0-2a8091bbe9b9","type":"ResetTool"},{"attributes":{"formatter":{"id":"ed71b577-7c49-44de-955e-aecc63654033","type":"BasicTickFormatter"},"plot":{"id":"f16d4b38-587e-4b78-8460-db3ef89c53a9","subtype":"Figure","type":"Plot"},"ticker":{"id":"6667050e-9c34-47f4-87da-bf971c0836f7","type":"BasicTicker"}},"id":"1db4586d-63fc-45fa-b25a-dbb9c18df455","type":"LinearAxis"},{"attributes":{"plot":{"id":"f16d4b38-587e-4b78-8460-db3ef89c53a9","subtype":"Figure","type":"Plot"}},"id":"c3fb2401-28ab-4d61-9962-5a119b82c638","type":"PanTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"c3fb2401-28ab-4d61-9962-5a119b82c638","type":"PanTool"},{"id":"3e8728cd-9341-43fb-87f2-2fd9d18cf041","type":"WheelZoomTool"},{"id":"17812e42-d600-48fa-9253-e6ff57164d89","type":"BoxZoomTool"},{"id":"20b8e369-8095-4c27-95e2-ab86e40de682","type":"SaveTool"},{"id":"45ab97ec-0a41-48d1-aff0-2a8091bbe9b9","type":"ResetTool"},{"id":"3c8595cb-7969-4787-bb46-195d79a042df","type":"HelpTool"}]},"id":"04ad3ba1-48b4-4416-80cd-bcff837b4f90","type":"Toolbar"},{"attributes":{"overlay":{"id":"d36456c0-dbc1-4d70-9e44-4f759b03e352","type":"BoxAnnotation"},"plot":{"id":"f16d4b38-587e-4b78-8460-db3ef89c53a9","subtype":"Figure","type":"Plot"}},"id":"17812e42-d600-48fa-9253-e6ff57164d89","type":"BoxZoomTool"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]}},"id":"a1587537-c53d-4af3-8b24-d9e51f6da5f5","type":"ColumnDataSource"},{"attributes":{},"id":"ed71b577-7c49-44de-955e-aecc63654033","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"af52070a-438d-4e08-b9bf-9767f885c2d5","type":"LinearAxis"}],"left":[{"id":"1db4586d-63fc-45fa-b25a-dbb9c18df455","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"af52070a-438d-4e08-b9bf-9767f885c2d5","type":"LinearAxis"},{"id":"d79faae5-0058-4d07-9046-0f1c4b756bb0","type":"Grid"},{"id":"1db4586d-63fc-45fa-b25a-dbb9c18df455","type":"LinearAxis"},{"id":"9275aa6e-fad5-42d2-89f0-96a827d8c1a6","type":"Grid"},{"id":"d36456c0-dbc1-4d70-9e44-4f759b03e352","type":"BoxAnnotation"},{"id":"1fca306f-ce45-432e-bc92-cb26b8d7283b","type":"GlyphRenderer"}],"title":{"id":"0c4ffc16-a0c2-402c-b5eb-15bf307167a7","type":"Title"},"tool_events":{"id":"498e9762-c64c-479c-9477-d1c2e0dd1b4f","type":"ToolEvents"},"toolbar":{"id":"04ad3ba1-48b4-4416-80cd-bcff837b4f90","type":"Toolbar"},"x_range":{"id":"bcb7efd8-8861-43c4-9fb0-72b094cbbf69","type":"DataRange1d"},"y_range":{"id":"d9fc36c2-75c9-4e5b-80ec-f76ca6018743","type":"DataRange1d"}},"id":"f16d4b38-587e-4b78-8460-db3ef89c53a9","subtype":"Figure","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"f16d4b38-587e-4b78-8460-db3ef89c53a9","subtype":"Figure","type":"Plot"},"ticker":{"id":"6667050e-9c34-47f4-87da-bf971c0836f7","type":"BasicTicker"}},"id":"9275aa6e-fad5-42d2-89f0-96a827d8c1a6","type":"Grid"},{"attributes":{"plot":{"id":"f16d4b38-587e-4b78-8460-db3ef89c53a9","subtype":"Figure","type":"Plot"}},"id":"20b8e369-8095-4c27-95e2-ab86e40de682","type":"SaveTool"},{"attributes":{"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2ee61b88-8297-4475-85a8-289848398007","type":"Line"},{"attributes":{"callback":null},"id":"d9fc36c2-75c9-4e5b-80ec-f76ca6018743","type":"DataRange1d"},{"attributes":{"plot":{"id":"f16d4b38-587e-4b78-8460-db3ef89c53a9","subtype":"Figure","type":"Plot"},"ticker":{"id":"e2e339b0-c236-4596-9e0e-75d345fc2e4f","type":"BasicTicker"}},"id":"d79faae5-0058-4d07-9046-0f1c4b756bb0","type":"Grid"},{"attributes":{"data_source":{"id":"a1587537-c53d-4af3-8b24-d9e51f6da5f5","type":"ColumnDataSource"},"glyph":{"id":"2ee61b88-8297-4475-85a8-289848398007","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"e004d683-1950-4459-b08b-d14f83d04a2f","type":"Line"},"selection_glyph":null},"id":"1fca306f-ce45-432e-bc92-cb26b8d7283b","type":"GlyphRenderer"},{"attributes":{},"id":"167084b0-0a30-471f-8755-d50455ab934d","type":"BasicTickFormatter"},{"attributes":{},"id":"6667050e-9c34-47f4-87da-bf971c0836f7","type":"BasicTicker"},{"attributes":{"plot":null,"text":"line"},"id":"0c4ffc16-a0c2-402c-b5eb-15bf307167a7","type":"Title"},{"attributes":{"plot":{"id":"f16d4b38-587e-4b78-8460-db3ef89c53a9","subtype":"Figure","type":"Plot"}},"id":"3e8728cd-9341-43fb-87f2-2fd9d18cf041","type":"WheelZoomTool"},{"attributes":{},"id":"498e9762-c64c-479c-9477-d1c2e0dd1b4f","type":"ToolEvents"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"d36456c0-dbc1-4d70-9e44-4f759b03e352","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"f16d4b38-587e-4b78-8460-db3ef89c53a9","subtype":"Figure","type":"Plot"}},"id":"3c8595cb-7969-4787-bb46-195d79a042df","type":"HelpTool"},{"attributes":{"callback":null},"id":"bcb7efd8-8861-43c4-9fb0-72b094cbbf69","type":"DataRange1d"},{"attributes":{},"id":"e2e339b0-c236-4596-9e0e-75d345fc2e4f","type":"BasicTicker"},{"attributes":{"formatter":{"id":"167084b0-0a30-471f-8755-d50455ab934d","type":"BasicTickFormatter"},"plot":{"id":"f16d4b38-587e-4b78-8460-db3ef89c53a9","subtype":"Figure","type":"Plot"},"ticker":{"id":"e2e339b0-c236-4596-9e0e-75d345fc2e4f","type":"BasicTicker"}},"id":"af52070a-438d-4e08-b9bf-9767f885c2d5","type":"LinearAxis"}],"root_ids":["f16d4b38-587e-4b78-8460-db3ef89c53a9"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"af9b8a97-aca5-4e70-b2d0-4cb1ab92f9b6","elementid":"3374a871-21a0-43fa-8ee4-02e6eb83ef4e","modelid":"f16d4b38-587e-4b78-8460-db3ef89c53a9"}];
                  
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