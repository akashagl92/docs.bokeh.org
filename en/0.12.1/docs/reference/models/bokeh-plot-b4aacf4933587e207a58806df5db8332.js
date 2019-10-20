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
      };var element = document.getElementById("e8154496-14c0-4a1c-b3ae-4c8aac0685f0");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e8154496-14c0-4a1c-b3ae-4c8aac0685f0' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.1.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"63eb36d1-6621-48be-8286-2cf6d58524b5":{"roots":{"references":[{"attributes":{"callback":null},"id":"7e538e3b-f27f-4317-a6ed-edbf10fabe6a","type":"DataRange1d"},{"attributes":{},"id":"81f59638-5224-479d-9260-af568a60bc1e","type":"BasicTickFormatter"},{"attributes":{},"id":"7bb4c79c-51d8-430d-be29-54d369e9cee3","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"8a4b20ad-c778-4cff-92ff-daee41e56a11","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"609c0991-2738-42af-92fa-25ad4fd61429","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"ded28a36-2628-49f7-947e-87b675686d22","type":"GlyphRenderer"},{"id":"8a4b20ad-c778-4cff-92ff-daee41e56a11","type":"LinearAxis"},{"id":"609c0991-2738-42af-92fa-25ad4fd61429","type":"LinearAxis"},{"id":"7a481014-014b-4c28-906c-1dacc86dda64","type":"Grid"},{"id":"ba804a98-7a7f-4abe-a75c-e59a15051fa0","type":"Grid"}],"title":null,"tool_events":{"id":"cb3d74d4-b492-4484-a81e-ee08bad9cf84","type":"ToolEvents"},"toolbar":{"id":"93e36449-2afb-4ac1-a4f6-2fd2d03944b5","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"7e538e3b-f27f-4317-a6ed-edbf10fabe6a","type":"DataRange1d"},"y_range":{"id":"9ed58453-cb46-46a8-9fb6-64f4279b4bbb","type":"DataRange1d"}},"id":"6b21bffc-78f7-4645-ba8f-693b1a97cb2e","type":"Plot"},{"attributes":{"callback":null},"id":"9ed58453-cb46-46a8-9fb6-64f4279b4bbb","type":"DataRange1d"},{"attributes":{"plot":{"id":"6b21bffc-78f7-4645-ba8f-693b1a97cb2e","type":"Plot"},"ticker":{"id":"329ece30-671d-4f33-9cdd-7ed95c6de980","type":"BasicTicker"}},"id":"7a481014-014b-4c28-906c-1dacc86dda64","type":"Grid"},{"attributes":{"data_source":{"id":"bc0b8e13-a796-44a8-aff5-bd4225961dc5","type":"ColumnDataSource"},"glyph":{"id":"235f022f-97de-4f7b-aad8-04f88dd700ed","type":"CircleX"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"ded28a36-2628-49f7-947e-87b675686d22","type":"GlyphRenderer"},{"attributes":{},"id":"329ece30-671d-4f33-9cdd-7ed95c6de980","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x","sizes"],"data":{"sizes":[10.0,11.25,12.5,13.75,15.0,16.25,17.5,18.75,20.0],"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"bc0b8e13-a796-44a8-aff5-bd4225961dc5","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"81f59638-5224-479d-9260-af568a60bc1e","type":"BasicTickFormatter"},"plot":{"id":"6b21bffc-78f7-4645-ba8f-693b1a97cb2e","type":"Plot"},"ticker":{"id":"329ece30-671d-4f33-9cdd-7ed95c6de980","type":"BasicTicker"}},"id":"8a4b20ad-c778-4cff-92ff-daee41e56a11","type":"LinearAxis"},{"attributes":{},"id":"cb3d74d4-b492-4484-a81e-ee08bad9cf84","type":"ToolEvents"},{"attributes":{"dimension":1,"plot":{"id":"6b21bffc-78f7-4645-ba8f-693b1a97cb2e","type":"Plot"},"ticker":{"id":"bc18ae82-ed2a-4592-aef9-6110943160b0","type":"BasicTicker"}},"id":"ba804a98-7a7f-4abe-a75c-e59a15051fa0","type":"Grid"},{"attributes":{"formatter":{"id":"7bb4c79c-51d8-430d-be29-54d369e9cee3","type":"BasicTickFormatter"},"plot":{"id":"6b21bffc-78f7-4645-ba8f-693b1a97cb2e","type":"Plot"},"ticker":{"id":"bc18ae82-ed2a-4592-aef9-6110943160b0","type":"BasicTicker"}},"id":"609c0991-2738-42af-92fa-25ad4fd61429","type":"LinearAxis"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#dd1c77"},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"235f022f-97de-4f7b-aad8-04f88dd700ed","type":"CircleX"},{"attributes":{},"id":"bc18ae82-ed2a-4592-aef9-6110943160b0","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"93e36449-2afb-4ac1-a4f6-2fd2d03944b5","type":"Toolbar"}],"root_ids":["6b21bffc-78f7-4645-ba8f-693b1a97cb2e"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"63eb36d1-6621-48be-8286-2cf6d58524b5","elementid":"e8154496-14c0-4a1c-b3ae-4c8aac0685f0","modelid":"6b21bffc-78f7-4645-ba8f-693b1a97cb2e"}];
              
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