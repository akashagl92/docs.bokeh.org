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
      };var element = document.getElementById("d5fe0b77-a18b-4fdf-81e7-fb73e552e061");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd5fe0b77-a18b-4fdf-81e7-fb73e552e061' but no matching script tag was found. ")
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
                  var docs_json = {"351be2bd-4cb4-4e5c-a3ca-351f143480f7":{"roots":{"references":[{"attributes":{"formatter":{"id":"1282f691-018d-4d04-b0d5-26e7fdd33776","type":"BasicTickFormatter"},"plot":{"id":"fb274cb4-6724-4546-bf04-58ee1bf6a256","subtype":"Figure","type":"Plot"},"ticker":{"id":"90dedcce-b67c-42f0-b053-b676d8ac4449","type":"BasicTicker"}},"id":"a1d93201-0544-4e1b-b874-4a88688d1162","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["xs","ys","line_color"],"data":{"line_color":["red","green"],"xs":[[1,2,3],[2,3,4]],"ys":[[6,7,2],[4,5,7]]}},"id":"1e2064c7-66c3-4fc4-8480-c5988fa6f69f","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"7d08fbf8-88f4-42b5-8349-23a12099adab","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"de9eb1dd-85e2-4c8a-982d-1547056420be","type":"BoxAnnotation"},{"attributes":{},"id":"ecacc3e2-f1a9-4d58-bc5c-599cc338eca2","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"a1d93201-0544-4e1b-b874-4a88688d1162","type":"LinearAxis"}],"left":[{"id":"7cfa672d-af14-4e10-8aa4-9a91e73732dc","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"a1d93201-0544-4e1b-b874-4a88688d1162","type":"LinearAxis"},{"id":"c3862937-6874-442f-8bc2-a7d489167428","type":"Grid"},{"id":"7cfa672d-af14-4e10-8aa4-9a91e73732dc","type":"LinearAxis"},{"id":"09079e71-48b3-4bc2-a637-7f4d7f27621e","type":"Grid"},{"id":"de9eb1dd-85e2-4c8a-982d-1547056420be","type":"BoxAnnotation"},{"id":"b7a574aa-831a-408c-b888-e1a21ec11957","type":"GlyphRenderer"}],"title":{"id":"14fe829f-486c-41fc-989e-d369eb042a9a","type":"Title"},"tool_events":{"id":"f97f685d-1cfa-4cfd-af63-d75f37ec9948","type":"ToolEvents"},"toolbar":{"id":"2be08f90-d608-489f-bba0-c368fe35dfc5","type":"Toolbar"},"x_range":{"id":"dc9a4a29-938a-4c29-a516-6da0b1d85b55","type":"DataRange1d"},"y_range":{"id":"7d08fbf8-88f4-42b5-8349-23a12099adab","type":"DataRange1d"}},"id":"fb274cb4-6724-4546-bf04-58ee1bf6a256","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"fb274cb4-6724-4546-bf04-58ee1bf6a256","subtype":"Figure","type":"Plot"}},"id":"4a06abfb-0f6e-4d24-88e7-342ae6062f52","type":"PanTool"},{"attributes":{"plot":{"id":"fb274cb4-6724-4546-bf04-58ee1bf6a256","subtype":"Figure","type":"Plot"}},"id":"b350c4ae-7fc0-4724-bc3f-9f52778d4461","type":"SaveTool"},{"attributes":{"callback":null},"id":"dc9a4a29-938a-4c29-a516-6da0b1d85b55","type":"DataRange1d"},{"attributes":{"plot":{"id":"fb274cb4-6724-4546-bf04-58ee1bf6a256","subtype":"Figure","type":"Plot"},"ticker":{"id":"90dedcce-b67c-42f0-b053-b676d8ac4449","type":"BasicTicker"}},"id":"c3862937-6874-442f-8bc2-a7d489167428","type":"Grid"},{"attributes":{"overlay":{"id":"de9eb1dd-85e2-4c8a-982d-1547056420be","type":"BoxAnnotation"},"plot":{"id":"fb274cb4-6724-4546-bf04-58ee1bf6a256","subtype":"Figure","type":"Plot"}},"id":"9ae82996-1a13-4a39-bde7-9a1f13cd26b0","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"fb274cb4-6724-4546-bf04-58ee1bf6a256","subtype":"Figure","type":"Plot"}},"id":"ce909d33-1448-4469-a59d-98e8730f6447","type":"ResetTool"},{"attributes":{"formatter":{"id":"ecacc3e2-f1a9-4d58-bc5c-599cc338eca2","type":"BasicTickFormatter"},"plot":{"id":"fb274cb4-6724-4546-bf04-58ee1bf6a256","subtype":"Figure","type":"Plot"},"ticker":{"id":"f6a067e3-832a-4290-a7f7-55004e70a520","type":"BasicTicker"}},"id":"7cfa672d-af14-4e10-8aa4-9a91e73732dc","type":"LinearAxis"},{"attributes":{"plot":null,"text":null},"id":"14fe829f-486c-41fc-989e-d369eb042a9a","type":"Title"},{"attributes":{"line_color":{"field":"line_color"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"9cd0079d-9d97-4e7c-aca5-419674ce681d","type":"MultiLine"},{"attributes":{},"id":"1282f691-018d-4d04-b0d5-26e7fdd33776","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"fb274cb4-6724-4546-bf04-58ee1bf6a256","subtype":"Figure","type":"Plot"},"ticker":{"id":"f6a067e3-832a-4290-a7f7-55004e70a520","type":"BasicTicker"}},"id":"09079e71-48b3-4bc2-a637-7f4d7f27621e","type":"Grid"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"71a585b3-f111-4de2-9b27-ee005ee06a79","type":"MultiLine"},{"attributes":{"data_source":{"id":"1e2064c7-66c3-4fc4-8480-c5988fa6f69f","type":"ColumnDataSource"},"glyph":{"id":"9cd0079d-9d97-4e7c-aca5-419674ce681d","type":"MultiLine"},"hover_glyph":null,"nonselection_glyph":{"id":"71a585b3-f111-4de2-9b27-ee005ee06a79","type":"MultiLine"},"selection_glyph":null},"id":"b7a574aa-831a-408c-b888-e1a21ec11957","type":"GlyphRenderer"},{"attributes":{},"id":"f6a067e3-832a-4290-a7f7-55004e70a520","type":"BasicTicker"},{"attributes":{"plot":{"id":"fb274cb4-6724-4546-bf04-58ee1bf6a256","subtype":"Figure","type":"Plot"}},"id":"88916c55-8b8a-4c88-ab41-3fff7d5c35a6","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"fb274cb4-6724-4546-bf04-58ee1bf6a256","subtype":"Figure","type":"Plot"}},"id":"4341a411-f11f-448a-aaaf-f0eac2e4cc45","type":"HelpTool"},{"attributes":{},"id":"f97f685d-1cfa-4cfd-af63-d75f37ec9948","type":"ToolEvents"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"4a06abfb-0f6e-4d24-88e7-342ae6062f52","type":"PanTool"},{"id":"88916c55-8b8a-4c88-ab41-3fff7d5c35a6","type":"WheelZoomTool"},{"id":"9ae82996-1a13-4a39-bde7-9a1f13cd26b0","type":"BoxZoomTool"},{"id":"b350c4ae-7fc0-4724-bc3f-9f52778d4461","type":"SaveTool"},{"id":"ce909d33-1448-4469-a59d-98e8730f6447","type":"ResetTool"},{"id":"4341a411-f11f-448a-aaaf-f0eac2e4cc45","type":"HelpTool"}]},"id":"2be08f90-d608-489f-bba0-c368fe35dfc5","type":"Toolbar"},{"attributes":{},"id":"90dedcce-b67c-42f0-b053-b676d8ac4449","type":"BasicTicker"}],"root_ids":["fb274cb4-6724-4546-bf04-58ee1bf6a256"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"351be2bd-4cb4-4e5c-a3ca-351f143480f7","elementid":"d5fe0b77-a18b-4fdf-81e7-fb73e552e061","modelid":"fb274cb4-6724-4546-bf04-58ee1bf6a256"}];
                  
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