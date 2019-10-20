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
      };var element = document.getElementById("9f656ff7-fed9-430d-bbf1-3353f6c4297a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '9f656ff7-fed9-430d-bbf1-3353f6c4297a' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"c284fceb-f4ed-4b41-99cf-cdb570cf7585":{"roots":{"references":[{"attributes":{"plot":{"id":"323a2453-bc5a-4dab-9b9e-99872e2edf21","type":"Plot"},"ticker":{"id":"92852bcd-bc09-4219-b472-64733be16196","type":"BasicTicker"}},"id":"2f2e463d-b365-448a-92f7-383e4114e084","type":"Grid"},{"attributes":{"line_color":{"value":"#8073ac"},"line_width":{"value":2},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"f2f4b089-561b-41df-9386-ca7c5f4d3e8d","type":"MultiLine"},{"attributes":{"data_source":{"id":"8aafbc8b-dc9a-4881-af48-be91f7170358","type":"ColumnDataSource"},"glyph":{"id":"f2f4b089-561b-41df-9386-ca7c5f4d3e8d","type":"MultiLine"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"f46c636a-8ccd-4354-8c44-0d917359e47f","type":"GlyphRenderer"},{"attributes":{},"id":"311d018c-0a19-4314-946b-02b7e8960cbf","type":"BasicTickFormatter"},{"attributes":{},"id":"92852bcd-bc09-4219-b472-64733be16196","type":"BasicTicker"},{"attributes":{"formatter":{"id":"df9901a6-11af-4972-ae01-7fa3a1dffbdb","type":"BasicTickFormatter"},"plot":{"id":"323a2453-bc5a-4dab-9b9e-99872e2edf21","type":"Plot"},"ticker":{"id":"92852bcd-bc09-4219-b472-64733be16196","type":"BasicTicker"}},"id":"39d48cb1-03af-492e-aee2-f41313791a14","type":"LinearAxis"},{"attributes":{"formatter":{"id":"311d018c-0a19-4314-946b-02b7e8960cbf","type":"BasicTickFormatter"},"plot":{"id":"323a2453-bc5a-4dab-9b9e-99872e2edf21","type":"Plot"},"ticker":{"id":"78a40e6d-e8bd-4260-b24d-3f3c43a88318","type":"BasicTicker"}},"id":"067762bb-41f3-4d79-8b74-3ee1922a79e1","type":"LinearAxis"},{"attributes":{"callback":null},"id":"f71227d5-ca33-418a-be1b-053b5f30edd5","type":"DataRange1d"},{"attributes":{},"id":"78a40e6d-e8bd-4260-b24d-3f3c43a88318","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"be948b78-51cc-41db-a90f-2b77b4661b13","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["xs","ys"],"data":{"xs":[[-2.09,-2.12,-2.0,-1.88,-1.91],[-1.599,-1.6320000000000001,-1.5,-1.3679999999999999,-1.401],[-1.108,-1.144,-1.0,-0.856,-0.892],[-0.617,-0.656,-0.5,-0.344,-0.383],[-0.126,-0.16799999999999998,0.0,0.16799999999999998,0.126],[0.365,0.32,0.5,0.6799999999999999,0.635],[0.856,0.808,1.0,1.192,1.144],[1.347,1.296,1.5,1.704,1.653],[1.838,1.784,2.0,2.216,2.162]],"ys":[[3.9,4.02,4.1,4.02,3.9],[2.14,2.272,2.36,2.272,2.14],[0.88,1.024,1.12,1.024,0.88],[0.12,0.276,0.38,0.276,0.12],[-0.13999999999999999,0.027999999999999997,0.13999999999999999,0.027999999999999997,-0.13999999999999999],[0.09999999999999998,0.28,0.4,0.28,0.09999999999999998],[0.84,1.032,1.1600000000000001,1.032,0.84],[2.08,2.284,2.42,2.284,2.08],[3.82,4.036,4.18,4.036,3.82]]}},"id":"8aafbc8b-dc9a-4881-af48-be91f7170358","type":"ColumnDataSource"},{"attributes":{},"id":"df9901a6-11af-4972-ae01-7fa3a1dffbdb","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"39d48cb1-03af-492e-aee2-f41313791a14","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"067762bb-41f3-4d79-8b74-3ee1922a79e1","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"f46c636a-8ccd-4354-8c44-0d917359e47f","type":"GlyphRenderer"},{"id":"39d48cb1-03af-492e-aee2-f41313791a14","type":"LinearAxis"},{"id":"067762bb-41f3-4d79-8b74-3ee1922a79e1","type":"LinearAxis"},{"id":"2f2e463d-b365-448a-92f7-383e4114e084","type":"Grid"},{"id":"f15adaa1-02d3-48b9-8775-e28cf3b64534","type":"Grid"}],"title":null,"tool_events":{"id":"e7d2ac4a-c702-4657-9daa-3bd593ab717e","type":"ToolEvents"},"toolbar":{"id":"be948b78-51cc-41db-a90f-2b77b4661b13","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"2c7dc349-d51d-4bb9-80a4-6e73a91b5ba7","type":"DataRange1d"},"y_range":{"id":"f71227d5-ca33-418a-be1b-053b5f30edd5","type":"DataRange1d"}},"id":"323a2453-bc5a-4dab-9b9e-99872e2edf21","type":"Plot"},{"attributes":{},"id":"e7d2ac4a-c702-4657-9daa-3bd593ab717e","type":"ToolEvents"},{"attributes":{"callback":null},"id":"2c7dc349-d51d-4bb9-80a4-6e73a91b5ba7","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"323a2453-bc5a-4dab-9b9e-99872e2edf21","type":"Plot"},"ticker":{"id":"78a40e6d-e8bd-4260-b24d-3f3c43a88318","type":"BasicTicker"}},"id":"f15adaa1-02d3-48b9-8775-e28cf3b64534","type":"Grid"}],"root_ids":["323a2453-bc5a-4dab-9b9e-99872e2edf21"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"c284fceb-f4ed-4b41-99cf-cdb570cf7585","elementid":"9f656ff7-fed9-430d-bbf1-3353f6c4297a","modelid":"323a2453-bc5a-4dab-9b9e-99872e2edf21"}];
                  
                  Bokeh.embed.embed_items(docs_json, render_items);
              });
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
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