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
        try {
          window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete window._bokeh_onload_callbacks
        }
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
      };var element = document.getElementById("2110a56a-af0e-41b1-9660-a4ad589cae00");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '2110a56a-af0e-41b1-9660-a4ad589cae00' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.js"];
    
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
                var docs_json = {"189d7862-e2a6-4cfa-b6e1-9af9d802f0e3":{"roots":{"references":[{"attributes":{"plot":{"id":"78a43c90-3a7e-43db-9a5c-7490e08163da","subtype":"Figure","type":"Plot"},"ticker":{"id":"2ce38462-31b7-43b8-8c62-a6c2e417e1a3","type":"BasicTicker"}},"id":"b1a962fd-92fe-4462-a1e6-73083e1c57bd","type":"Grid"},{"attributes":{},"id":"2ce38462-31b7-43b8-8c62-a6c2e417e1a3","type":"BasicTicker"},{"attributes":{"plot":{"id":"78a43c90-3a7e-43db-9a5c-7490e08163da","subtype":"Figure","type":"Plot"}},"id":"78156645-bbc8-4793-84b4-03cb4d7fb7dc","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"eddd173b-3845-42b1-a9b1-de54bf89e8de","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"a7322f3c-05f9-48ae-af6d-18a91fefaa42","type":"CircleCross"},{"attributes":{},"id":"21cb82e9-9e1e-4b4d-ad46-f416a389c4a6","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#FB8072"},"line_color":{"value":"#FB8072"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"7d9099f2-9b29-47b3-8f36-81e16cde20aa","type":"CircleCross"},{"attributes":{},"id":"7e37703f-5926-4f50-b502-9de7cb678822","type":"LinearScale"},{"attributes":{"below":[{"id":"d563c8d6-f750-4989-a830-f9d04e7ee74c","type":"LinearAxis"}],"left":[{"id":"950914e1-4449-40ab-b65f-5c9a44b75738","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"d563c8d6-f750-4989-a830-f9d04e7ee74c","type":"LinearAxis"},{"id":"b1a962fd-92fe-4462-a1e6-73083e1c57bd","type":"Grid"},{"id":"950914e1-4449-40ab-b65f-5c9a44b75738","type":"LinearAxis"},{"id":"08e0178e-eca4-460c-9254-b70d9805f143","type":"Grid"},{"id":"eddd173b-3845-42b1-a9b1-de54bf89e8de","type":"BoxAnnotation"},{"id":"38bb296c-f27f-460e-9c30-921cc58b27e5","type":"GlyphRenderer"}],"title":{"id":"40400c76-d978-4441-ae11-02b05ba24b73","type":"Title"},"tool_events":{"id":"4f3cbc17-7960-484b-96f4-b5b7d197adde","type":"ToolEvents"},"toolbar":{"id":"c74cc23a-5325-496d-a4e5-bfeadbab8511","type":"Toolbar"},"x_range":{"id":"dca37f01-33dd-4123-a00b-25a75ad04a02","type":"DataRange1d"},"x_scale":{"id":"7e37703f-5926-4f50-b502-9de7cb678822","type":"LinearScale"},"y_range":{"id":"abd1f7aa-982e-42b6-b718-bbe02cc04ca7","type":"DataRange1d"},"y_scale":{"id":"68aaf9d8-40c7-40b0-9734-be669cbe1ad2","type":"LinearScale"}},"id":"78a43c90-3a7e-43db-9a5c-7490e08163da","subtype":"Figure","type":"Plot"},{"attributes":{"plot":null,"text":""},"id":"40400c76-d978-4441-ae11-02b05ba24b73","type":"Title"},{"attributes":{},"id":"7017e8cb-9a7a-4828-976f-97808c50a30b","type":"BasicTickFormatter"},{"attributes":{},"id":"a12a2280-0295-4bd9-b6fc-7b0d79a4045e","type":"BasicTicker"},{"attributes":{"callback":null},"id":"abd1f7aa-982e-42b6-b718-bbe02cc04ca7","type":"DataRange1d"},{"attributes":{"overlay":{"id":"eddd173b-3845-42b1-a9b1-de54bf89e8de","type":"BoxAnnotation"},"plot":{"id":"78a43c90-3a7e-43db-9a5c-7490e08163da","subtype":"Figure","type":"Plot"}},"id":"f7648600-5aa0-455a-a306-131b6b9519f9","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"1d06fed1-8ebd-477f-b6bb-576228fd3b36","type":"ColumnDataSource"},"glyph":{"id":"7d9099f2-9b29-47b3-8f36-81e16cde20aa","type":"CircleCross"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"a7322f3c-05f9-48ae-af6d-18a91fefaa42","type":"CircleCross"},"selection_glyph":null},"id":"38bb296c-f27f-460e-9c30-921cc58b27e5","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"7017e8cb-9a7a-4828-976f-97808c50a30b","type":"BasicTickFormatter"},"plot":{"id":"78a43c90-3a7e-43db-9a5c-7490e08163da","subtype":"Figure","type":"Plot"},"ticker":{"id":"a12a2280-0295-4bd9-b6fc-7b0d79a4045e","type":"BasicTicker"}},"id":"950914e1-4449-40ab-b65f-5c9a44b75738","type":"LinearAxis"},{"attributes":{"plot":{"id":"78a43c90-3a7e-43db-9a5c-7490e08163da","subtype":"Figure","type":"Plot"}},"id":"45cded8f-c99b-40f0-871b-303e86663d17","type":"ResetTool"},{"attributes":{"callback":null},"id":"dca37f01-33dd-4123-a00b-25a75ad04a02","type":"DataRange1d"},{"attributes":{"plot":{"id":"78a43c90-3a7e-43db-9a5c-7490e08163da","subtype":"Figure","type":"Plot"}},"id":"5b1b7e6f-e539-4a0d-a7c6-94dccfe92160","type":"PanTool"},{"attributes":{"dimension":1,"plot":{"id":"78a43c90-3a7e-43db-9a5c-7490e08163da","subtype":"Figure","type":"Plot"},"ticker":{"id":"a12a2280-0295-4bd9-b6fc-7b0d79a4045e","type":"BasicTicker"}},"id":"08e0178e-eca4-460c-9254-b70d9805f143","type":"Grid"},{"attributes":{},"id":"4f3cbc17-7960-484b-96f4-b5b7d197adde","type":"ToolEvents"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"5b1b7e6f-e539-4a0d-a7c6-94dccfe92160","type":"PanTool"},{"id":"2605bed6-f600-4a00-912b-d910397e9c87","type":"WheelZoomTool"},{"id":"f7648600-5aa0-455a-a306-131b6b9519f9","type":"BoxZoomTool"},{"id":"78156645-bbc8-4793-84b4-03cb4d7fb7dc","type":"SaveTool"},{"id":"45cded8f-c99b-40f0-871b-303e86663d17","type":"ResetTool"},{"id":"42c10967-f858-4aa9-90a3-7ac223654140","type":"HelpTool"}]},"id":"c74cc23a-5325-496d-a4e5-bfeadbab8511","type":"Toolbar"},{"attributes":{},"id":"68aaf9d8-40c7-40b0-9734-be669cbe1ad2","type":"LinearScale"},{"attributes":{"formatter":{"id":"21cb82e9-9e1e-4b4d-ad46-f416a389c4a6","type":"BasicTickFormatter"},"plot":{"id":"78a43c90-3a7e-43db-9a5c-7490e08163da","subtype":"Figure","type":"Plot"},"ticker":{"id":"2ce38462-31b7-43b8-8c62-a6c2e417e1a3","type":"BasicTicker"}},"id":"d563c8d6-f750-4989-a830-f9d04e7ee74c","type":"LinearAxis"},{"attributes":{"plot":{"id":"78a43c90-3a7e-43db-9a5c-7490e08163da","subtype":"Figure","type":"Plot"}},"id":"42c10967-f858-4aa9-90a3-7ac223654140","type":"HelpTool"},{"attributes":{"plot":{"id":"78a43c90-3a7e-43db-9a5c-7490e08163da","subtype":"Figure","type":"Plot"}},"id":"2605bed6-f600-4a00-912b-d910397e9c87","type":"WheelZoomTool"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[4,5,6]}},"id":"1d06fed1-8ebd-477f-b6bb-576228fd3b36","type":"ColumnDataSource"}],"root_ids":["78a43c90-3a7e-43db-9a5c-7490e08163da"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"189d7862-e2a6-4cfa-b6e1-9af9d802f0e3","elementid":"2110a56a-af0e-41b1-9660-a4ad589cae00","modelid":"78a43c90-3a7e-43db-9a5c-7490e08163da"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
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
