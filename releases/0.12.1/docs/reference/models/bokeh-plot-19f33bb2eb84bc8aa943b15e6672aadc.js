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
      };var element = document.getElementById("adc429ef-f379-4456-9a55-096ea422a1dd");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'adc429ef-f379-4456-9a55-096ea422a1dd' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.1.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"9c7faaae-bf4e-4fac-a572-036be6207728":{"roots":{"references":[{"attributes":{},"id":"1f632ed7-3acb-4021-93d7-cc4ea73d350e","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"ec7c6141-4cb1-425f-af03-7ae334a47645","type":"Plot"},"ticker":{"id":"1f632ed7-3acb-4021-93d7-cc4ea73d350e","type":"BasicTicker"}},"id":"478efab1-9e0a-45d2-8792-4f7753688446","type":"Grid"},{"attributes":{"formatter":{"id":"4e42c3ad-b55e-4d1e-9a9b-c93d002fd812","type":"BasicTickFormatter"},"plot":{"id":"ec7c6141-4cb1-425f-af03-7ae334a47645","type":"Plot"},"ticker":{"id":"f0920136-eafa-4e76-bf05-2ffc0a8a830e","type":"BasicTicker"}},"id":"6102a3c3-c512-4e67-811b-663202e24339","type":"LinearAxis"},{"attributes":{"callback":null},"id":"96f75d84-b3df-453f-87ba-a699b63711e2","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"0949917b-b033-4474-b96f-0e3b08251951","type":"Toolbar"},{"attributes":{},"id":"f0920136-eafa-4e76-bf05-2ffc0a8a830e","type":"BasicTicker"},{"attributes":{"below":[{"id":"6102a3c3-c512-4e67-811b-663202e24339","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"84d6ee8a-19e6-4d95-9b16-5a44f876cd4c","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"4736a4c2-3b49-400e-b6a7-1d48cf399ea0","type":"GlyphRenderer"},{"id":"6102a3c3-c512-4e67-811b-663202e24339","type":"LinearAxis"},{"id":"84d6ee8a-19e6-4d95-9b16-5a44f876cd4c","type":"LinearAxis"},{"id":"fe3950d7-d009-4a0e-afb1-2f6905489ea7","type":"Grid"},{"id":"478efab1-9e0a-45d2-8792-4f7753688446","type":"Grid"}],"title":null,"tool_events":{"id":"9bf0baf3-da58-4d63-bf59-1deb0a1ebf7f","type":"ToolEvents"},"toolbar":{"id":"0949917b-b033-4474-b96f-0e3b08251951","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"96f75d84-b3df-453f-87ba-a699b63711e2","type":"DataRange1d"},"y_range":{"id":"00cdc4a0-f324-4715-abd8-7823e18bcd18","type":"DataRange1d"}},"id":"ec7c6141-4cb1-425f-af03-7ae334a47645","type":"Plot"},{"attributes":{},"id":"4e42c3ad-b55e-4d1e-9a9b-c93d002fd812","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#99d594"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"73e4f979-072e-4e09-a4a8-e5a0057efbc2","type":"Triangle"},{"attributes":{"callback":null,"column_names":["y","x","sizes"],"data":{"sizes":[10.0,11.25,12.5,13.75,15.0,16.25,17.5,18.75,20.0],"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"d0fd6cec-4d4e-41c7-8bfb-ba80cb4a1630","type":"ColumnDataSource"},{"attributes":{},"id":"9bf0baf3-da58-4d63-bf59-1deb0a1ebf7f","type":"ToolEvents"},{"attributes":{"plot":{"id":"ec7c6141-4cb1-425f-af03-7ae334a47645","type":"Plot"},"ticker":{"id":"f0920136-eafa-4e76-bf05-2ffc0a8a830e","type":"BasicTicker"}},"id":"fe3950d7-d009-4a0e-afb1-2f6905489ea7","type":"Grid"},{"attributes":{"callback":null},"id":"00cdc4a0-f324-4715-abd8-7823e18bcd18","type":"DataRange1d"},{"attributes":{},"id":"53b5930f-fed0-483c-9faa-bb32adc2b68b","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"53b5930f-fed0-483c-9faa-bb32adc2b68b","type":"BasicTickFormatter"},"plot":{"id":"ec7c6141-4cb1-425f-af03-7ae334a47645","type":"Plot"},"ticker":{"id":"1f632ed7-3acb-4021-93d7-cc4ea73d350e","type":"BasicTicker"}},"id":"84d6ee8a-19e6-4d95-9b16-5a44f876cd4c","type":"LinearAxis"},{"attributes":{"data_source":{"id":"d0fd6cec-4d4e-41c7-8bfb-ba80cb4a1630","type":"ColumnDataSource"},"glyph":{"id":"73e4f979-072e-4e09-a4a8-e5a0057efbc2","type":"Triangle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"4736a4c2-3b49-400e-b6a7-1d48cf399ea0","type":"GlyphRenderer"}],"root_ids":["ec7c6141-4cb1-425f-af03-7ae334a47645"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"9c7faaae-bf4e-4fac-a572-036be6207728","elementid":"adc429ef-f379-4456-9a55-096ea422a1dd","modelid":"ec7c6141-4cb1-425f-af03-7ae334a47645"}];
              
              Bokeh.embed.embed_items(docs_json, render_items);
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.css");
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