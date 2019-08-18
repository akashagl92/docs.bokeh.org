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
      };var element = document.getElementById("341b2acb-5676-4ca1-b824-6850f892c761");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '341b2acb-5676-4ca1-b824-6850f892c761' but no matching script tag was found. ")
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
                var docs_json = {"f9a8b069-1c73-48ae-9c50-fc878351554e":{"roots":{"references":[{"attributes":{"overlay":{"id":"97452951-5da5-427e-961f-5e3db2ca47be","type":"BoxAnnotation"},"plot":{"id":"a645ed4d-4ee5-419b-a6a7-67f76adbc2a5","subtype":"Figure","type":"Plot"}},"id":"b4f23a16-7674-4195-93bf-e86710cfb9b5","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"97452951-5da5-427e-961f-5e3db2ca47be","type":"BoxAnnotation"},{"attributes":{"callback":null,"column_names":["x","y","size"],"data":{"size":[10,20,30],"x":[1,2,3],"y":[1,2,3]}},"id":"1100add3-8930-42b1-9ee7-1f440930708f","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"81bad762-b920-43d1-94a5-fa0b296ce084","type":"DataRange1d"},{"attributes":{},"id":"eae21e31-8019-4145-8699-d5448cfca3da","type":"BasicTicker"},{"attributes":{},"id":"72b66376-6764-4b4c-b0a6-56ca140393e7","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"1100add3-8930-42b1-9ee7-1f440930708f","type":"ColumnDataSource"},"glyph":{"id":"d36e1168-8118-4669-ad16-3cbe8763f066","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9ce3ad80-132f-45fa-93ab-157583c2321e","type":"Square"},"selection_glyph":null},"id":"c08bbdc7-fb37-4c19-b238-d1982bc4274f","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"ec50069f-0bf2-4b5b-8266-437761e549be","type":"BasicTickFormatter"},"plot":{"id":"a645ed4d-4ee5-419b-a6a7-67f76adbc2a5","subtype":"Figure","type":"Plot"},"ticker":{"id":"eae21e31-8019-4145-8699-d5448cfca3da","type":"BasicTicker"}},"id":"a48ecab9-bbc4-435b-80cf-4006dd8f4139","type":"LinearAxis"},{"attributes":{"plot":{"id":"a645ed4d-4ee5-419b-a6a7-67f76adbc2a5","subtype":"Figure","type":"Plot"}},"id":"6bc4483f-db5d-4dfc-bad8-c60de9f5f9d2","type":"PanTool"},{"attributes":{"plot":{"id":"a645ed4d-4ee5-419b-a6a7-67f76adbc2a5","subtype":"Figure","type":"Plot"}},"id":"1301806c-8a31-4325-b466-16bd62876cee","type":"SaveTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"6bc4483f-db5d-4dfc-bad8-c60de9f5f9d2","type":"PanTool"},{"id":"1e8d4101-b156-4e36-8151-5eae3254488d","type":"WheelZoomTool"},{"id":"b4f23a16-7674-4195-93bf-e86710cfb9b5","type":"BoxZoomTool"},{"id":"1301806c-8a31-4325-b466-16bd62876cee","type":"SaveTool"},{"id":"70f8f42e-0b4d-4e48-bd0d-1a054d83c0b8","type":"ResetTool"},{"id":"d9440b21-e721-4352-8e39-066de96ba882","type":"HelpTool"}]},"id":"33a0d551-8c71-429f-ac5c-5469fb78cb16","type":"Toolbar"},{"attributes":{"below":[{"id":"a48ecab9-bbc4-435b-80cf-4006dd8f4139","type":"LinearAxis"}],"left":[{"id":"57c0ded2-3aef-43b6-828f-c29ca944be9f","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"a48ecab9-bbc4-435b-80cf-4006dd8f4139","type":"LinearAxis"},{"id":"b08be219-bdd4-4708-868b-d7ab844eca07","type":"Grid"},{"id":"57c0ded2-3aef-43b6-828f-c29ca944be9f","type":"LinearAxis"},{"id":"b7ef3450-79b6-41a5-ab19-9e40deb4cc57","type":"Grid"},{"id":"97452951-5da5-427e-961f-5e3db2ca47be","type":"BoxAnnotation"},{"id":"c08bbdc7-fb37-4c19-b238-d1982bc4274f","type":"GlyphRenderer"}],"title":{"id":"3b31068b-7983-4fe8-8455-05120e5856d7","type":"Title"},"tool_events":{"id":"f35f7c9c-8f54-4c22-9101-6e2ff5f9d2b8","type":"ToolEvents"},"toolbar":{"id":"33a0d551-8c71-429f-ac5c-5469fb78cb16","type":"Toolbar"},"x_range":{"id":"81bad762-b920-43d1-94a5-fa0b296ce084","type":"DataRange1d"},"y_range":{"id":"9e35f5f8-c3f3-4f14-b262-b26912b1a475","type":"DataRange1d"}},"id":"a645ed4d-4ee5-419b-a6a7-67f76adbc2a5","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"f35f7c9c-8f54-4c22-9101-6e2ff5f9d2b8","type":"ToolEvents"},{"attributes":{"dimension":1,"plot":{"id":"a645ed4d-4ee5-419b-a6a7-67f76adbc2a5","subtype":"Figure","type":"Plot"},"ticker":{"id":"3199d800-047a-483f-aff5-4f73cc69edde","type":"BasicTicker"}},"id":"b7ef3450-79b6-41a5-ab19-9e40deb4cc57","type":"Grid"},{"attributes":{},"id":"3199d800-047a-483f-aff5-4f73cc69edde","type":"BasicTicker"},{"attributes":{"plot":{"id":"a645ed4d-4ee5-419b-a6a7-67f76adbc2a5","subtype":"Figure","type":"Plot"}},"id":"70f8f42e-0b4d-4e48-bd0d-1a054d83c0b8","type":"ResetTool"},{"attributes":{"plot":{"id":"a645ed4d-4ee5-419b-a6a7-67f76adbc2a5","subtype":"Figure","type":"Plot"},"ticker":{"id":"eae21e31-8019-4145-8699-d5448cfca3da","type":"BasicTicker"}},"id":"b08be219-bdd4-4708-868b-d7ab844eca07","type":"Grid"},{"attributes":{"plot":{"id":"a645ed4d-4ee5-419b-a6a7-67f76adbc2a5","subtype":"Figure","type":"Plot"}},"id":"d9440b21-e721-4352-8e39-066de96ba882","type":"HelpTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"9ce3ad80-132f-45fa-93ab-157583c2321e","type":"Square"},{"attributes":{"plot":{"id":"a645ed4d-4ee5-419b-a6a7-67f76adbc2a5","subtype":"Figure","type":"Plot"}},"id":"1e8d4101-b156-4e36-8151-5eae3254488d","type":"WheelZoomTool"},{"attributes":{"fill_color":{"value":"#74ADD1"},"line_color":{"value":"#74ADD1"},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"d36e1168-8118-4669-ad16-3cbe8763f066","type":"Square"},{"attributes":{"callback":null},"id":"9e35f5f8-c3f3-4f14-b262-b26912b1a475","type":"DataRange1d"},{"attributes":{"formatter":{"id":"72b66376-6764-4b4c-b0a6-56ca140393e7","type":"BasicTickFormatter"},"plot":{"id":"a645ed4d-4ee5-419b-a6a7-67f76adbc2a5","subtype":"Figure","type":"Plot"},"ticker":{"id":"3199d800-047a-483f-aff5-4f73cc69edde","type":"BasicTicker"}},"id":"57c0ded2-3aef-43b6-828f-c29ca944be9f","type":"LinearAxis"},{"attributes":{"plot":null,"text":""},"id":"3b31068b-7983-4fe8-8455-05120e5856d7","type":"Title"},{"attributes":{},"id":"ec50069f-0bf2-4b5b-8266-437761e549be","type":"BasicTickFormatter"}],"root_ids":["a645ed4d-4ee5-419b-a6a7-67f76adbc2a5"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"f9a8b069-1c73-48ae-9c50-fc878351554e","elementid":"341b2acb-5676-4ca1-b824-6850f892c761","modelid":"a645ed4d-4ee5-419b-a6a7-67f76adbc2a5"}];
                
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
