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
      };var element = document.getElementById("473927b5-cb45-42b2-8177-8fef45feab23");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '473927b5-cb45-42b2-8177-8fef45feab23' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.1.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"d6113703-2eaa-487a-8579-b4a25569fa72":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"4e1fb363-f63a-4be3-a17d-0270f1f71fc9","type":"PanTool"},{"id":"1df2eed1-b587-4f94-8b68-c5b9ccbbe11a","type":"WheelZoomTool"},{"id":"1c786b05-08b4-4407-bcb4-102427ece4d1","type":"BoxZoomTool"},{"id":"4e927ed0-42d7-4275-9965-9317db8d595b","type":"SaveTool"},{"id":"4589159a-23d1-4ed5-b746-3a6fe4ad8193","type":"ResetTool"},{"id":"22399b66-be46-4853-9a4d-27cc360313c9","type":"HelpTool"}]},"id":"6b90c1dc-5602-4a7e-b3f8-57e9d625c571","type":"Toolbar"},{"attributes":{"plot":{"id":"c59235af-5526-4468-b56c-517c003daea6","subtype":"Figure","type":"Plot"}},"id":"22399b66-be46-4853-9a4d-27cc360313c9","type":"HelpTool"},{"attributes":{},"id":"378d48c6-d9bd-4d22-bacd-67dd2d14986a","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"c59235af-5526-4468-b56c-517c003daea6","subtype":"Figure","type":"Plot"},"ticker":{"id":"faf5270e-4c7a-45bb-bd38-2c779f73be44","type":"BasicTicker"}},"id":"f2f2f8c2-a808-4ae6-9222-ce14a972e90a","type":"Grid"},{"attributes":{"plot":{"id":"c59235af-5526-4468-b56c-517c003daea6","subtype":"Figure","type":"Plot"}},"id":"4589159a-23d1-4ed5-b746-3a6fe4ad8193","type":"ResetTool"},{"attributes":{"callback":null},"id":"ee4dc16e-73c4-4955-a41d-42f63ba1ba75","type":"DataRange1d"},{"attributes":{"formatter":{"id":"d49a9454-6007-41b8-bd6d-5f8d7c7de971","type":"BasicTickFormatter"},"plot":{"id":"c59235af-5526-4468-b56c-517c003daea6","subtype":"Figure","type":"Plot"},"ticker":{"id":"14a4419a-0186-4f77-b6cf-1fad3080dfef","type":"BasicTicker"}},"id":"4dd759df-7bd3-463b-9dd7-d3eb3d892f01","type":"LinearAxis"},{"attributes":{},"id":"faf5270e-4c7a-45bb-bd38-2c779f73be44","type":"BasicTicker"},{"attributes":{},"id":"d49a9454-6007-41b8-bd6d-5f8d7c7de971","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"c59235af-5526-4468-b56c-517c003daea6","subtype":"Figure","type":"Plot"}},"id":"4e1fb363-f63a-4be3-a17d-0270f1f71fc9","type":"PanTool"},{"attributes":{"formatter":{"id":"378d48c6-d9bd-4d22-bacd-67dd2d14986a","type":"BasicTickFormatter"},"plot":{"id":"c59235af-5526-4468-b56c-517c003daea6","subtype":"Figure","type":"Plot"},"ticker":{"id":"faf5270e-4c7a-45bb-bd38-2c779f73be44","type":"BasicTicker"}},"id":"43e1312a-6dc4-464e-ad34-8bd1d8d2926c","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"0c431956-3dd9-42f2-bb06-c3804098e0f9","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"screen","value":20},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"da8aad8b-af75-4e04-b095-a169670f4487","type":"Rect"},{"attributes":{"plot":{"id":"c59235af-5526-4468-b56c-517c003daea6","subtype":"Figure","type":"Plot"}},"id":"1df2eed1-b587-4f94-8b68-c5b9ccbbe11a","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"6654a8fb-79e1-43ac-aa9b-168d97691d9e","type":"DataRange1d"},{"attributes":{"plot":{"id":"c59235af-5526-4468-b56c-517c003daea6","subtype":"Figure","type":"Plot"}},"id":"4e927ed0-42d7-4275-9965-9317db8d595b","type":"SaveTool"},{"attributes":{},"id":"14a4419a-0186-4f77-b6cf-1fad3080dfef","type":"BasicTicker"},{"attributes":{"plot":{"id":"c59235af-5526-4468-b56c-517c003daea6","subtype":"Figure","type":"Plot"},"ticker":{"id":"14a4419a-0186-4f77-b6cf-1fad3080dfef","type":"BasicTicker"}},"id":"0bd31477-151b-4803-90e5-99d325309764","type":"Grid"},{"attributes":{"overlay":{"id":"0c431956-3dd9-42f2-bb06-c3804098e0f9","type":"BoxAnnotation"},"plot":{"id":"c59235af-5526-4468-b56c-517c003daea6","subtype":"Figure","type":"Plot"}},"id":"1c786b05-08b4-4407-bcb4-102427ece4d1","type":"BoxZoomTool"},{"attributes":{"fill_color":{"value":"#CAB2D6"},"height":{"units":"screen","value":20},"line_color":{"value":"#CAB2D6"},"width":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"b015129b-8397-44a6-b8c0-21799324a1d0","type":"Rect"},{"attributes":{"plot":null,"text":null},"id":"67ce8bc5-37b0-446d-a5a6-07fd4cae8717","type":"Title"},{"attributes":{"data_source":{"id":"5c11b492-ea27-4c88-9034-e2812c7a42cc","type":"ColumnDataSource"},"glyph":{"id":"b015129b-8397-44a6-b8c0-21799324a1d0","type":"Rect"},"hover_glyph":null,"nonselection_glyph":{"id":"da8aad8b-af75-4e04-b095-a169670f4487","type":"Rect"},"selection_glyph":null},"id":"03897af9-74d5-4130-96b0-ee8cc3aa31c3","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"4dd759df-7bd3-463b-9dd7-d3eb3d892f01","type":"LinearAxis"}],"left":[{"id":"43e1312a-6dc4-464e-ad34-8bd1d8d2926c","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"4dd759df-7bd3-463b-9dd7-d3eb3d892f01","type":"LinearAxis"},{"id":"0bd31477-151b-4803-90e5-99d325309764","type":"Grid"},{"id":"43e1312a-6dc4-464e-ad34-8bd1d8d2926c","type":"LinearAxis"},{"id":"f2f2f8c2-a808-4ae6-9222-ce14a972e90a","type":"Grid"},{"id":"0c431956-3dd9-42f2-bb06-c3804098e0f9","type":"BoxAnnotation"},{"id":"03897af9-74d5-4130-96b0-ee8cc3aa31c3","type":"GlyphRenderer"}],"title":{"id":"67ce8bc5-37b0-446d-a5a6-07fd4cae8717","type":"Title"},"tool_events":{"id":"293ba59b-0b34-4f72-864f-b59c57c0cafb","type":"ToolEvents"},"toolbar":{"id":"6b90c1dc-5602-4a7e-b3f8-57e9d625c571","type":"Toolbar"},"x_range":{"id":"ee4dc16e-73c4-4955-a41d-42f63ba1ba75","type":"DataRange1d"},"y_range":{"id":"6654a8fb-79e1-43ac-aa9b-168d97691d9e","type":"DataRange1d"}},"id":"c59235af-5526-4468-b56c-517c003daea6","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"5c11b492-ea27-4c88-9034-e2812c7a42cc","type":"ColumnDataSource"},{"attributes":{},"id":"293ba59b-0b34-4f72-864f-b59c57c0cafb","type":"ToolEvents"}],"root_ids":["c59235af-5526-4468-b56c-517c003daea6"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"d6113703-2eaa-487a-8579-b4a25569fa72","elementid":"473927b5-cb45-42b2-8177-8fef45feab23","modelid":"c59235af-5526-4468-b56c-517c003daea6"}];
              
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