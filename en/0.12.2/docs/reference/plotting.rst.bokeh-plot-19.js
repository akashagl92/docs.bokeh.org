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
      };var element = document.getElementById("d58e727f-b468-4a14-90ca-e712a63083da");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd58e727f-b468-4a14-90ca-e712a63083da' but no matching script tag was found. ")
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
                  var docs_json = {"5a6042c4-ed33-4a3d-8e1b-a6e9e9736cf3":{"roots":{"references":[{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"b07c68bd-ca84-464d-b8fb-98a1c6161e59","type":"BoxAnnotation"},{"attributes":{},"id":"0d641616-d4a4-4705-9b31-50da4b8082fb","type":"BasicTicker"},{"attributes":{},"id":"c078e8c4-6b1e-49bd-8696-b12bde0c661a","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"0ddebcbd-d9f5-44f6-90ca-89625d9c9fb1","type":"LinearAxis"}],"left":[{"id":"b0d8761e-887e-4c31-803c-4f2e8e9c0e66","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"0ddebcbd-d9f5-44f6-90ca-89625d9c9fb1","type":"LinearAxis"},{"id":"b658a687-2a68-4210-88f2-d1b3cddd0b39","type":"Grid"},{"id":"b0d8761e-887e-4c31-803c-4f2e8e9c0e66","type":"LinearAxis"},{"id":"a80aece0-fbdf-464f-a51a-d5487612d94e","type":"Grid"},{"id":"b07c68bd-ca84-464d-b8fb-98a1c6161e59","type":"BoxAnnotation"},{"id":"38b01805-5c8d-4121-981d-c6bab25bc988","type":"GlyphRenderer"}],"title":{"id":"3d2c5240-ea0c-4c68-9247-e9cecbc164d0","type":"Title"},"tool_events":{"id":"9ff50f4b-05b0-423e-ad2e-b64e30af3bf2","type":"ToolEvents"},"toolbar":{"id":"f50068b2-af4e-4e5b-862b-2ce789806328","type":"Toolbar"},"x_range":{"id":"fbc60b84-c22b-440e-a4b5-1210722d7361","type":"DataRange1d"},"y_range":{"id":"4e42e916-48bb-465f-a84d-64cb587c3a29","type":"DataRange1d"}},"id":"a3861758-d987-4367-bdb5-ac15a0a7790e","subtype":"Figure","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"a3861758-d987-4367-bdb5-ac15a0a7790e","subtype":"Figure","type":"Plot"},"ticker":{"id":"0d641616-d4a4-4705-9b31-50da4b8082fb","type":"BasicTicker"}},"id":"a80aece0-fbdf-464f-a51a-d5487612d94e","type":"Grid"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"f63f13c4-66ff-4d18-a4dc-39625286b154","type":"Segment"},{"attributes":{},"id":"150144b8-dcda-4862-8e22-dde34bd63655","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":null},"id":"3d2c5240-ea0c-4c68-9247-e9cecbc164d0","type":"Title"},{"attributes":{"plot":{"id":"a3861758-d987-4367-bdb5-ac15a0a7790e","subtype":"Figure","type":"Plot"}},"id":"1642a795-847a-4334-a6ef-37164e962654","type":"ResetTool"},{"attributes":{"plot":{"id":"a3861758-d987-4367-bdb5-ac15a0a7790e","subtype":"Figure","type":"Plot"},"ticker":{"id":"5254d117-f6e1-46f7-879c-e3b79386ff9f","type":"BasicTicker"}},"id":"b658a687-2a68-4210-88f2-d1b3cddd0b39","type":"Grid"},{"attributes":{"plot":{"id":"a3861758-d987-4367-bdb5-ac15a0a7790e","subtype":"Figure","type":"Plot"}},"id":"1fbdecf8-920c-4327-a531-166f8780f438","type":"HelpTool"},{"attributes":{"callback":null},"id":"fbc60b84-c22b-440e-a4b5-1210722d7361","type":"DataRange1d"},{"attributes":{"plot":{"id":"a3861758-d987-4367-bdb5-ac15a0a7790e","subtype":"Figure","type":"Plot"}},"id":"ab067c33-bd89-4414-a145-e0406f661b5f","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"a3861758-d987-4367-bdb5-ac15a0a7790e","subtype":"Figure","type":"Plot"}},"id":"d93fc479-2b1b-4c5a-bb0a-32e973f7de6d","type":"PanTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"d93fc479-2b1b-4c5a-bb0a-32e973f7de6d","type":"PanTool"},{"id":"ab067c33-bd89-4414-a145-e0406f661b5f","type":"WheelZoomTool"},{"id":"b23f9149-ad35-476a-8cde-c40b3399d2c2","type":"BoxZoomTool"},{"id":"c93555a7-62b4-4174-bb1a-7261d5f0f679","type":"SaveTool"},{"id":"1642a795-847a-4334-a6ef-37164e962654","type":"ResetTool"},{"id":"1fbdecf8-920c-4327-a531-166f8780f438","type":"HelpTool"}]},"id":"f50068b2-af4e-4e5b-862b-2ce789806328","type":"Toolbar"},{"attributes":{},"id":"5254d117-f6e1-46f7-879c-e3b79386ff9f","type":"BasicTicker"},{"attributes":{"plot":{"id":"a3861758-d987-4367-bdb5-ac15a0a7790e","subtype":"Figure","type":"Plot"}},"id":"c93555a7-62b4-4174-bb1a-7261d5f0f679","type":"SaveTool"},{"attributes":{"data_source":{"id":"697df8aa-4d58-4ced-8aac-389f506b8ef5","type":"ColumnDataSource"},"glyph":{"id":"67964c70-ee15-4da8-bfc6-a50bce7e691d","type":"Segment"},"hover_glyph":null,"nonselection_glyph":{"id":"f63f13c4-66ff-4d18-a4dc-39625286b154","type":"Segment"},"selection_glyph":null},"id":"38b01805-5c8d-4121-981d-c6bab25bc988","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"c078e8c4-6b1e-49bd-8696-b12bde0c661a","type":"BasicTickFormatter"},"plot":{"id":"a3861758-d987-4367-bdb5-ac15a0a7790e","subtype":"Figure","type":"Plot"},"ticker":{"id":"0d641616-d4a4-4705-9b31-50da4b8082fb","type":"BasicTicker"}},"id":"b0d8761e-887e-4c31-803c-4f2e8e9c0e66","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y1","y0","x0","x1"],"data":{"x0":[1,2,3],"x1":[1,2,3],"y0":[1,2,3],"y1":[1.2,2.5,3.7]}},"id":"697df8aa-4d58-4ced-8aac-389f506b8ef5","type":"ColumnDataSource"},{"attributes":{"line_color":{"value":"#F4A582"},"line_width":{"value":3},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"67964c70-ee15-4da8-bfc6-a50bce7e691d","type":"Segment"},{"attributes":{},"id":"9ff50f4b-05b0-423e-ad2e-b64e30af3bf2","type":"ToolEvents"},{"attributes":{"formatter":{"id":"150144b8-dcda-4862-8e22-dde34bd63655","type":"BasicTickFormatter"},"plot":{"id":"a3861758-d987-4367-bdb5-ac15a0a7790e","subtype":"Figure","type":"Plot"},"ticker":{"id":"5254d117-f6e1-46f7-879c-e3b79386ff9f","type":"BasicTicker"}},"id":"0ddebcbd-d9f5-44f6-90ca-89625d9c9fb1","type":"LinearAxis"},{"attributes":{"callback":null},"id":"4e42e916-48bb-465f-a84d-64cb587c3a29","type":"DataRange1d"},{"attributes":{"overlay":{"id":"b07c68bd-ca84-464d-b8fb-98a1c6161e59","type":"BoxAnnotation"},"plot":{"id":"a3861758-d987-4367-bdb5-ac15a0a7790e","subtype":"Figure","type":"Plot"}},"id":"b23f9149-ad35-476a-8cde-c40b3399d2c2","type":"BoxZoomTool"}],"root_ids":["a3861758-d987-4367-bdb5-ac15a0a7790e"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"5a6042c4-ed33-4a3d-8e1b-a6e9e9736cf3","elementid":"d58e727f-b468-4a14-90ca-e712a63083da","modelid":"a3861758-d987-4367-bdb5-ac15a0a7790e"}];
                  
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