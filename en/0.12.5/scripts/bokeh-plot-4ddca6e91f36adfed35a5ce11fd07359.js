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
      };var element = document.getElementById("dcca7177-f5c5-4cfe-a746-85cfcdb7271c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'dcca7177-f5c5-4cfe-a746-85cfcdb7271c' but no matching script tag was found. ")
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
                var docs_json = {"748571c1-4d78-4d89-9273-05a17a144d5e":{"roots":{"references":[{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"67f5d03e-ede6-4449-80e9-8cdf5c83861c","type":"Circle"},{"attributes":{"formatter":{"id":"05aecff6-89b5-4b21-b2eb-9ef79b9ef380","type":"BasicTickFormatter"},"plot":{"id":"b8048353-f57a-4ab3-937c-d1f603dbc0a4","subtype":"Figure","type":"Plot"},"ticker":{"id":"7afd7c49-a1d0-489a-aed5-d2cb9d70eddb","type":"BasicTicker"}},"id":"c08ed899-6ab5-4f0e-80fc-09b96ad54043","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[1.2589254117941673,3.1622776601683795,10.0,31.622776601683793,100.0,316.22776601683796,1000.0]}},"id":"d49c966b-a1e2-48fd-a71b-21b362cb8608","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"f2e25862-c4ec-4b7e-8afb-4f663ffcfa4c","type":"ColumnDataSource"},"glyph":{"id":"5fdb5e6a-8f0e-48ae-8daf-9c10d8f3a92d","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"e9732ed5-ecfe-4669-8a8b-efa99f698b62","type":"Line"},"selection_glyph":null},"id":"502c2791-729d-4489-98c6-88297cbfa460","type":"GlyphRenderer"},{"attributes":{},"id":"7afd7c49-a1d0-489a-aed5-d2cb9d70eddb","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[1.2589254117941673,3.1622776601683795,10.0,31.622776601683793,100.0,316.22776601683796,1000.0]}},"id":"f2e25862-c4ec-4b7e-8afb-4f663ffcfa4c","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"b8048353-f57a-4ab3-937c-d1f603dbc0a4","subtype":"Figure","type":"Plot"}},"id":"22336618-c409-47b6-b47d-46b46fcf04f4","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"b8048353-f57a-4ab3-937c-d1f603dbc0a4","subtype":"Figure","type":"Plot"}},"id":"e47583f9-c2a3-4c03-b17c-d148fa652fb9","type":"PanTool"},{"attributes":{"formatter":{"id":"011557a4-c7f2-4b5d-9247-cf2f7b79e50e","type":"LogTickFormatter"},"plot":{"id":"b8048353-f57a-4ab3-937c-d1f603dbc0a4","subtype":"Figure","type":"Plot"},"ticker":{"id":"208aa9e2-ad9a-44ef-ad2f-aa112b21f61a","type":"LogTicker"}},"id":"6e3223e0-9bae-42e7-a9d6-939b4dccad69","type":"LogAxis"},{"attributes":{"callback":null},"id":"b914b35b-6ac3-4a61-a36a-96aaf0bed436","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"49fb9265-a559-40c5-9408-6130baeea869","type":"BoxAnnotation"},{"attributes":{"dimension":1,"plot":{"id":"b8048353-f57a-4ab3-937c-d1f603dbc0a4","subtype":"Figure","type":"Plot"},"ticker":{"id":"208aa9e2-ad9a-44ef-ad2f-aa112b21f61a","type":"LogTicker"}},"id":"dda60748-ab6c-415a-83dd-ba742ee5d005","type":"Grid"},{"attributes":{},"id":"05aecff6-89b5-4b21-b2eb-9ef79b9ef380","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"b8048353-f57a-4ab3-937c-d1f603dbc0a4","subtype":"Figure","type":"Plot"}},"id":"71074d0c-3610-40a0-9702-50bce4899330","type":"ResetTool"},{"attributes":{"num_minor_ticks":10},"id":"208aa9e2-ad9a-44ef-ad2f-aa112b21f61a","type":"LogTicker"},{"attributes":{"below":[{"id":"c08ed899-6ab5-4f0e-80fc-09b96ad54043","type":"LinearAxis"}],"left":[{"id":"6e3223e0-9bae-42e7-a9d6-939b4dccad69","type":"LogAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"c08ed899-6ab5-4f0e-80fc-09b96ad54043","type":"LinearAxis"},{"id":"6f74bb41-3c9a-4a64-b8cd-ce11a7a5e302","type":"Grid"},{"id":"6e3223e0-9bae-42e7-a9d6-939b4dccad69","type":"LogAxis"},{"id":"dda60748-ab6c-415a-83dd-ba742ee5d005","type":"Grid"},{"id":"49fb9265-a559-40c5-9408-6130baeea869","type":"BoxAnnotation"},{"id":"502c2791-729d-4489-98c6-88297cbfa460","type":"GlyphRenderer"},{"id":"79a16364-f160-4947-a1c2-0aff733d34ba","type":"GlyphRenderer"}],"title":{"id":"e92923a0-435b-4bf7-b250-0ba57055bb9a","type":"Title"},"tool_events":{"id":"f0f172ca-44fd-49da-a2a2-ec8224d5714c","type":"ToolEvents"},"toolbar":{"id":"65ddd927-7589-4d95-8f71-c6ff0f9dfb7e","type":"Toolbar"},"x_range":{"id":"22397c78-b7f5-47df-8af0-aab3b09f6022","type":"DataRange1d"},"y_mapper_type":"log","y_range":{"id":"b914b35b-6ac3-4a61-a36a-96aaf0bed436","type":"DataRange1d"}},"id":"b8048353-f57a-4ab3-937c-d1f603dbc0a4","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"e47583f9-c2a3-4c03-b17c-d148fa652fb9","type":"PanTool"},{"id":"22336618-c409-47b6-b47d-46b46fcf04f4","type":"WheelZoomTool"},{"id":"deb8f368-756e-4422-a660-4af15c181e71","type":"BoxZoomTool"},{"id":"c8b54356-e773-4f59-90c2-c11396d92ccc","type":"SaveTool"},{"id":"71074d0c-3610-40a0-9702-50bce4899330","type":"ResetTool"},{"id":"062007d8-edbd-4a29-ab1a-7c5d9c251648","type":"HelpTool"}]},"id":"65ddd927-7589-4d95-8f71-c6ff0f9dfb7e","type":"Toolbar"},{"attributes":{"ticker":null},"id":"011557a4-c7f2-4b5d-9247-cf2f7b79e50e","type":"LogTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"95411e16-71a2-49fb-b9c0-8eea30a64fcc","type":"Circle"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"e9732ed5-ecfe-4669-8a8b-efa99f698b62","type":"Line"},{"attributes":{"plot":{"id":"b8048353-f57a-4ab3-937c-d1f603dbc0a4","subtype":"Figure","type":"Plot"},"ticker":{"id":"7afd7c49-a1d0-489a-aed5-d2cb9d70eddb","type":"BasicTicker"}},"id":"6f74bb41-3c9a-4a64-b8cd-ce11a7a5e302","type":"Grid"},{"attributes":{"data_source":{"id":"d49c966b-a1e2-48fd-a71b-21b362cb8608","type":"ColumnDataSource"},"glyph":{"id":"67f5d03e-ede6-4449-80e9-8cdf5c83861c","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"95411e16-71a2-49fb-b9c0-8eea30a64fcc","type":"Circle"},"selection_glyph":null},"id":"79a16364-f160-4947-a1c2-0aff733d34ba","type":"GlyphRenderer"},{"attributes":{},"id":"f0f172ca-44fd-49da-a2a2-ec8224d5714c","type":"ToolEvents"},{"attributes":{"plot":{"id":"b8048353-f57a-4ab3-937c-d1f603dbc0a4","subtype":"Figure","type":"Plot"}},"id":"c8b54356-e773-4f59-90c2-c11396d92ccc","type":"SaveTool"},{"attributes":{"plot":null,"text":""},"id":"e92923a0-435b-4bf7-b250-0ba57055bb9a","type":"Title"},{"attributes":{"overlay":{"id":"49fb9265-a559-40c5-9408-6130baeea869","type":"BoxAnnotation"},"plot":{"id":"b8048353-f57a-4ab3-937c-d1f603dbc0a4","subtype":"Figure","type":"Plot"}},"id":"deb8f368-756e-4422-a660-4af15c181e71","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"22397c78-b7f5-47df-8af0-aab3b09f6022","type":"DataRange1d"},{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"5fdb5e6a-8f0e-48ae-8daf-9c10d8f3a92d","type":"Line"},{"attributes":{"plot":{"id":"b8048353-f57a-4ab3-937c-d1f603dbc0a4","subtype":"Figure","type":"Plot"}},"id":"062007d8-edbd-4a29-ab1a-7c5d9c251648","type":"HelpTool"}],"root_ids":["b8048353-f57a-4ab3-937c-d1f603dbc0a4"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"748571c1-4d78-4d89-9273-05a17a144d5e","elementid":"dcca7177-f5c5-4cfe-a746-85cfcdb7271c","modelid":"b8048353-f57a-4ab3-937c-d1f603dbc0a4"}];
                
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
