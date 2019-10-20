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
      };var element = document.getElementById("d1bd748e-276c-49fc-88a7-cfc4ec53f66d");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd1bd748e-276c-49fc-88a7-cfc4ec53f66d' but no matching script tag was found. ")
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
                  var docs_json = {"6cdd87a2-e20a-49fe-99d2-5d53dc06b430":{"roots":{"references":[{"attributes":{"formatter":{"id":"0e7103f9-7d69-404a-9dd2-51a93264ef67","type":"BasicTickFormatter"},"plot":{"id":"d7495431-e5d2-4525-b3f2-b12fa49a6295","type":"Plot"},"ticker":{"id":"8f434b74-f001-457a-b917-660c5e57ab08","type":"BasicTicker"}},"id":"c1131d79-f455-4dcf-8f4c-798e73780780","type":"LinearAxis"},{"attributes":{},"id":"26b59896-b4e9-4cb7-af1a-abbd3d24f4ca","type":"ToolEvents"},{"attributes":{"below":[{"id":"c1131d79-f455-4dcf-8f4c-798e73780780","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"ddb30030-8e02-4f06-984b-92a5888e6941","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"649129ce-4890-4bff-a488-dc0a84a47a3b","type":"GlyphRenderer"},{"id":"c1131d79-f455-4dcf-8f4c-798e73780780","type":"LinearAxis"},{"id":"ddb30030-8e02-4f06-984b-92a5888e6941","type":"LinearAxis"},{"id":"4d79224e-100a-470c-8be2-9dff3148dcd1","type":"Grid"},{"id":"751e8d05-47e5-4d8c-a3d8-8897ff0cdb85","type":"Grid"}],"title":null,"tool_events":{"id":"26b59896-b4e9-4cb7-af1a-abbd3d24f4ca","type":"ToolEvents"},"toolbar":{"id":"6a3cd226-f927-481b-a562-fa4b8c5030d6","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"2e94823e-c774-4723-aca1-d59c49df9ddd","type":"DataRange1d"},"y_range":{"id":"974c2018-2ab6-414d-811f-3d150b89531c","type":"DataRange1d"}},"id":"d7495431-e5d2-4525-b3f2-b12fa49a6295","type":"Plot"},{"attributes":{"data_source":{"id":"4f1143d5-a2e7-43e7-9696-fc71c09ce89b","type":"ColumnDataSource"},"glyph":{"id":"b9ba3cc8-55a8-409b-a00a-83546b13d3c1","type":"AnnularWedge"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"649129ce-4890-4bff-a488-dc0a84a47a3b","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","r"],"data":{"r":[0.23333333333333336,0.275,0.3166666666666667,0.35833333333333334,0.4,0.4416666666666667,0.48333333333333334,0.525,0.5666666666666667],"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"4f1143d5-a2e7-43e7-9696-fc71c09ce89b","type":"ColumnDataSource"},{"attributes":{},"id":"46e42d1e-dfc0-4dc0-ba6a-3b3c27a92b9a","type":"BasicTicker"},{"attributes":{"callback":null},"id":"2e94823e-c774-4723-aca1-d59c49df9ddd","type":"DataRange1d"},{"attributes":{},"id":"8f434b74-f001-457a-b917-660c5e57ab08","type":"BasicTicker"},{"attributes":{"formatter":{"id":"08b390b6-5fc4-4e19-87a0-cb541fb39b2e","type":"BasicTickFormatter"},"plot":{"id":"d7495431-e5d2-4525-b3f2-b12fa49a6295","type":"Plot"},"ticker":{"id":"46e42d1e-dfc0-4dc0-ba6a-3b3c27a92b9a","type":"BasicTicker"}},"id":"ddb30030-8e02-4f06-984b-92a5888e6941","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"d7495431-e5d2-4525-b3f2-b12fa49a6295","type":"Plot"},"ticker":{"id":"46e42d1e-dfc0-4dc0-ba6a-3b3c27a92b9a","type":"BasicTicker"}},"id":"751e8d05-47e5-4d8c-a3d8-8897ff0cdb85","type":"Grid"},{"attributes":{},"id":"08b390b6-5fc4-4e19-87a0-cb541fb39b2e","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"6a3cd226-f927-481b-a562-fa4b8c5030d6","type":"Toolbar"},{"attributes":{"plot":{"id":"d7495431-e5d2-4525-b3f2-b12fa49a6295","type":"Plot"},"ticker":{"id":"8f434b74-f001-457a-b917-660c5e57ab08","type":"BasicTicker"}},"id":"4d79224e-100a-470c-8be2-9dff3148dcd1","type":"Grid"},{"attributes":{"end_angle":{"units":"rad","value":4.1},"fill_color":{"value":"#8888ee"},"inner_radius":{"units":"data","value":0.2},"outer_radius":{"field":"r","units":"data"},"start_angle":{"units":"rad","value":0.6},"x":{"field":"x"},"y":{"field":"y"}},"id":"b9ba3cc8-55a8-409b-a00a-83546b13d3c1","type":"AnnularWedge"},{"attributes":{},"id":"0e7103f9-7d69-404a-9dd2-51a93264ef67","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"974c2018-2ab6-414d-811f-3d150b89531c","type":"DataRange1d"}],"root_ids":["d7495431-e5d2-4525-b3f2-b12fa49a6295"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"6cdd87a2-e20a-49fe-99d2-5d53dc06b430","elementid":"d1bd748e-276c-49fc-88a7-cfc4ec53f66d","modelid":"d7495431-e5d2-4525-b3f2-b12fa49a6295"}];
                  
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