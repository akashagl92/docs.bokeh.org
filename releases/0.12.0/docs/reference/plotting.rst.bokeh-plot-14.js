document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined") {
        window._bokeh_onload_callbacks = [];
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
      };var element = document.getElementById("f5816df5-8735-4b77-82df-b85f130fe397");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'f5816df5-8735-4b77-82df-b85f130fe397' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.0.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"26241908-a69c-4388-9b8e-a54d89aa44bf":{"roots":{"references":[{"attributes":{"plot":{"id":"ed951599-7d36-445b-9218-2b265b0ae065","subtype":"Figure","type":"Plot"}},"id":"c162e8ce-579e-4e85-a080-47903d3c9979","type":"PanTool"},{"attributes":{"plot":{"id":"ed951599-7d36-445b-9218-2b265b0ae065","subtype":"Figure","type":"Plot"}},"id":"adea3b4b-57e6-4235-a96b-36b470207aaa","type":"HelpTool"},{"attributes":{},"id":"db8a05c0-658d-4a2f-b380-6c564dd6e0a1","type":"BasicTicker"},{"attributes":{"data_source":{"id":"dea83133-6d96-449e-b3c1-b58d13a7d431","type":"ColumnDataSource"},"glyph":{"id":"5041abbb-ea06-4b00-ae2a-754e454eb5a1","type":"Patches"},"hover_glyph":null,"nonselection_glyph":{"id":"d6603905-e782-4582-8029-be831f2b64e3","type":"Patches"},"selection_glyph":null},"id":"ec490feb-89e4-4d30-b183-a157e0b15f1d","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"ed951599-7d36-445b-9218-2b265b0ae065","subtype":"Figure","type":"Plot"}},"id":"7477333a-97f6-48ad-84e9-ea3d0b914e49","type":"WheelZoomTool"},{"attributes":{"plot":null,"text":null},"id":"9acce2ec-30ab-4fbd-ba5f-96618acac462","type":"Title"},{"attributes":{"formatter":{"id":"6afcf496-aafe-4ff8-9d55-567af9f9c970","type":"BasicTickFormatter"},"plot":{"id":"ed951599-7d36-445b-9218-2b265b0ae065","subtype":"Figure","type":"Plot"},"ticker":{"id":"db8a05c0-658d-4a2f-b380-6c564dd6e0a1","type":"BasicTicker"}},"id":"3c7f1676-3792-45fe-91e3-01bfaf93c256","type":"LinearAxis"},{"attributes":{},"id":"13f926f8-0993-40a3-bf3f-8758b72a1865","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["xs","ys","line_color","fill_color"],"data":{"fill_color":["#43a2ca","#a8ddb5"],"line_color":["#43a2ca","#a8ddb5"],"xs":[[1,2,3],[4,5,6,5]],"ys":[[1,2,1],[4,5,5,4]]}},"id":"dea83133-6d96-449e-b3c1-b58d13a7d431","type":"ColumnDataSource"},{"attributes":{},"id":"28c77d23-1e11-4758-9f25-24d504e49324","type":"BasicTicker"},{"attributes":{"formatter":{"id":"13f926f8-0993-40a3-bf3f-8758b72a1865","type":"BasicTickFormatter"},"plot":{"id":"ed951599-7d36-445b-9218-2b265b0ae065","subtype":"Figure","type":"Plot"},"ticker":{"id":"28c77d23-1e11-4758-9f25-24d504e49324","type":"BasicTicker"}},"id":"39a868cc-4f63-481c-bddb-e8b8618d9265","type":"LinearAxis"},{"attributes":{"below":[{"id":"3c7f1676-3792-45fe-91e3-01bfaf93c256","type":"LinearAxis"}],"left":[{"id":"39a868cc-4f63-481c-bddb-e8b8618d9265","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"3c7f1676-3792-45fe-91e3-01bfaf93c256","type":"LinearAxis"},{"id":"f6f1e719-80b3-475e-9ea4-20c584d1237a","type":"Grid"},{"id":"39a868cc-4f63-481c-bddb-e8b8618d9265","type":"LinearAxis"},{"id":"868e1f78-3adb-4d66-9fb5-30496bc4c373","type":"Grid"},{"id":"96c90d91-f0fb-4898-be3d-f97f77c11796","type":"BoxAnnotation"},{"id":"ec490feb-89e4-4d30-b183-a157e0b15f1d","type":"GlyphRenderer"}],"title":{"id":"9acce2ec-30ab-4fbd-ba5f-96618acac462","type":"Title"},"tool_events":{"id":"7eb857cd-2cdf-4664-8edb-fadda88a427c","type":"ToolEvents"},"toolbar":{"id":"08e2813a-9cda-47cc-b127-bb6ced8a303a","type":"Toolbar"},"x_range":{"id":"a8eed7cc-6866-4933-8b85-fa09cda08a38","type":"DataRange1d"},"y_range":{"id":"704f4e42-9874-4486-abdc-5c5edda6e599","type":"DataRange1d"}},"id":"ed951599-7d36-445b-9218-2b265b0ae065","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"96c90d91-f0fb-4898-be3d-f97f77c11796","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"ed951599-7d36-445b-9218-2b265b0ae065","subtype":"Figure","type":"Plot"}},"id":"5ce0bf0e-15cc-425e-8f84-8b25b6fa2a94","type":"SaveTool"},{"attributes":{"overlay":{"id":"96c90d91-f0fb-4898-be3d-f97f77c11796","type":"BoxAnnotation"},"plot":{"id":"ed951599-7d36-445b-9218-2b265b0ae065","subtype":"Figure","type":"Plot"}},"id":"1b0e5803-dca0-4167-9829-49e5e85d0e33","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"704f4e42-9874-4486-abdc-5c5edda6e599","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"c162e8ce-579e-4e85-a080-47903d3c9979","type":"PanTool"},{"id":"7477333a-97f6-48ad-84e9-ea3d0b914e49","type":"WheelZoomTool"},{"id":"1b0e5803-dca0-4167-9829-49e5e85d0e33","type":"BoxZoomTool"},{"id":"5ce0bf0e-15cc-425e-8f84-8b25b6fa2a94","type":"SaveTool"},{"id":"30491b42-3725-484b-be41-055058d60eeb","type":"ResetTool"},{"id":"adea3b4b-57e6-4235-a96b-36b470207aaa","type":"HelpTool"}]},"id":"08e2813a-9cda-47cc-b127-bb6ced8a303a","type":"Toolbar"},{"attributes":{"plot":{"id":"ed951599-7d36-445b-9218-2b265b0ae065","subtype":"Figure","type":"Plot"},"ticker":{"id":"db8a05c0-658d-4a2f-b380-6c564dd6e0a1","type":"BasicTicker"}},"id":"f6f1e719-80b3-475e-9ea4-20c584d1237a","type":"Grid"},{"attributes":{"callback":null},"id":"a8eed7cc-6866-4933-8b85-fa09cda08a38","type":"DataRange1d"},{"attributes":{},"id":"7eb857cd-2cdf-4664-8edb-fadda88a427c","type":"ToolEvents"},{"attributes":{"fill_color":{"field":"fill_color"},"line_color":{"field":"line_color"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"5041abbb-ea06-4b00-ae2a-754e454eb5a1","type":"Patches"},{"attributes":{"plot":{"id":"ed951599-7d36-445b-9218-2b265b0ae065","subtype":"Figure","type":"Plot"}},"id":"30491b42-3725-484b-be41-055058d60eeb","type":"ResetTool"},{"attributes":{},"id":"6afcf496-aafe-4ff8-9d55-567af9f9c970","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"d6603905-e782-4582-8029-be831f2b64e3","type":"Patches"},{"attributes":{"dimension":1,"plot":{"id":"ed951599-7d36-445b-9218-2b265b0ae065","subtype":"Figure","type":"Plot"},"ticker":{"id":"28c77d23-1e11-4758-9f25-24d504e49324","type":"BasicTicker"}},"id":"868e1f78-3adb-4d66-9fb5-30496bc4c373","type":"Grid"}],"root_ids":["ed951599-7d36-445b-9218-2b265b0ae065"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"26241908-a69c-4388-9b8e-a54d89aa44bf","elementid":"f5816df5-8735-4b77-82df-b85f130fe397","modelid":"ed951599-7d36-445b-9218-2b265b0ae065"}];
              
              Bokeh.embed.embed_items(docs_json, render_items);
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.css");
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