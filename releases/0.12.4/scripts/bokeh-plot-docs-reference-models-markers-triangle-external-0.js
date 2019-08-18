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
      };var element = document.getElementById("cb11d209-42aa-4a04-9146-cd1cb22eb342");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'cb11d209-42aa-4a04-9146-cd1cb22eb342' but no matching script tag was found. ")
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
                var docs_json = {"b25ed72a-075b-4986-a011-2f9d5f5a629e":{"roots":{"references":[{"attributes":{"below":[{"id":"933b6ef0-a34b-4027-83b5-fd568f926017","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"34a5a5ae-3831-47fd-907f-cd43341751a9","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"ce4528ab-738d-4fa5-bb72-5f7cb7540e8b","type":"GlyphRenderer"},{"id":"933b6ef0-a34b-4027-83b5-fd568f926017","type":"LinearAxis"},{"id":"34a5a5ae-3831-47fd-907f-cd43341751a9","type":"LinearAxis"},{"id":"4ecdd6ba-cca4-402c-b024-65c056a6f612","type":"Grid"},{"id":"03150667-19f7-4d58-96a5-d87c1d6d2145","type":"Grid"}],"title":null,"tool_events":{"id":"21abae07-521a-4d43-acfe-20da5255b1e5","type":"ToolEvents"},"toolbar":{"id":"71b4c33d-0d64-46d6-9c0d-284af69f49d3","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"f6be32f3-4631-498a-9eef-49310ef38f74","type":"DataRange1d"},"y_range":{"id":"b2a95200-24f7-4127-a3cc-c0c57257ca16","type":"DataRange1d"}},"id":"0324d409-114d-4003-a6c7-36e80233d302","type":"Plot"},{"attributes":{"formatter":{"id":"df15fb05-dfe6-4b7c-b817-854f131e6638","type":"BasicTickFormatter"},"plot":{"id":"0324d409-114d-4003-a6c7-36e80233d302","type":"Plot"},"ticker":{"id":"71e5f11f-2766-417e-927f-c7449cc57a31","type":"BasicTicker"}},"id":"933b6ef0-a34b-4027-83b5-fd568f926017","type":"LinearAxis"},{"attributes":{"plot":{"id":"0324d409-114d-4003-a6c7-36e80233d302","type":"Plot"},"ticker":{"id":"71e5f11f-2766-417e-927f-c7449cc57a31","type":"BasicTicker"}},"id":"4ecdd6ba-cca4-402c-b024-65c056a6f612","type":"Grid"},{"attributes":{"formatter":{"id":"184a943a-c830-4737-94bf-292cdc283bec","type":"BasicTickFormatter"},"plot":{"id":"0324d409-114d-4003-a6c7-36e80233d302","type":"Plot"},"ticker":{"id":"11ed24cd-4be9-4e24-b630-59485455dcf2","type":"BasicTicker"}},"id":"34a5a5ae-3831-47fd-907f-cd43341751a9","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["x","sizes","y"],"data":{"sizes":{"__ndarray__":"AAAAAAAAJEAAAAAAAIAmQAAAAAAAAClAAAAAAACAK0AAAAAAAAAuQAAAAAAAQDBAAAAAAACAMUAAAAAAAMAyQAAAAAAAADRA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"86fbff1f-9593-483d-9762-5f3295a7e83c","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#99d594"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3a4ce314-f951-40fc-bf36-744795d79932","type":"Triangle"},{"attributes":{},"id":"df15fb05-dfe6-4b7c-b817-854f131e6638","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"f6be32f3-4631-498a-9eef-49310ef38f74","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"71b4c33d-0d64-46d6-9c0d-284af69f49d3","type":"Toolbar"},{"attributes":{"callback":null},"id":"b2a95200-24f7-4127-a3cc-c0c57257ca16","type":"DataRange1d"},{"attributes":{},"id":"184a943a-c830-4737-94bf-292cdc283bec","type":"BasicTickFormatter"},{"attributes":{},"id":"21abae07-521a-4d43-acfe-20da5255b1e5","type":"ToolEvents"},{"attributes":{},"id":"11ed24cd-4be9-4e24-b630-59485455dcf2","type":"BasicTicker"},{"attributes":{"data_source":{"id":"86fbff1f-9593-483d-9762-5f3295a7e83c","type":"ColumnDataSource"},"glyph":{"id":"3a4ce314-f951-40fc-bf36-744795d79932","type":"Triangle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"ce4528ab-738d-4fa5-bb72-5f7cb7540e8b","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"0324d409-114d-4003-a6c7-36e80233d302","type":"Plot"},"ticker":{"id":"11ed24cd-4be9-4e24-b630-59485455dcf2","type":"BasicTicker"}},"id":"03150667-19f7-4d58-96a5-d87c1d6d2145","type":"Grid"},{"attributes":{},"id":"71e5f11f-2766-417e-927f-c7449cc57a31","type":"BasicTicker"}],"root_ids":["0324d409-114d-4003-a6c7-36e80233d302"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"b25ed72a-075b-4986-a011-2f9d5f5a629e","elementid":"cb11d209-42aa-4a04-9146-cd1cb22eb342","modelid":"0324d409-114d-4003-a6c7-36e80233d302"}];
                
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
