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
      };var element = document.getElementById("d1c6c164-bd0b-4ff5-abac-2f8a614018ec");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd1c6c164-bd0b-4ff5-abac-2f8a614018ec' but no matching script tag was found. ")
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
                  var docs_json = {"e1cc78ef-8b80-4346-8d18-e165e7d43042":{"roots":{"references":[{"attributes":{"plot":{"id":"f1c9daa6-1330-4d6a-a654-aa0378a2839b","subtype":"Figure","type":"Plot"},"ticker":{"id":"6b7a9bf8-e789-4f5a-99e7-6488dbf91b49","type":"BasicTicker"}},"id":"bbefbc0e-6135-4ecb-be0b-d4c7faedaa89","type":"Grid"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"a8bc710a-ea76-4d73-98b6-b6f7f07a3778","type":"PanTool"},{"id":"936e9d56-9935-4e58-8942-88b661307e60","type":"WheelZoomTool"},{"id":"95675d36-9307-4f2f-837b-1d6c8e00602a","type":"BoxZoomTool"},{"id":"932e63a6-b28a-41a4-b8eb-41720557e860","type":"SaveTool"},{"id":"f63e4eb2-b357-4347-8f25-6fd5903e7ab0","type":"ResetTool"},{"id":"ce2820dd-72d4-424f-ac04-429953cb730d","type":"HelpTool"}]},"id":"0ee7c7d5-84a6-4a1d-9f1a-c58aa69766c1","type":"Toolbar"},{"attributes":{"formatter":{"id":"2910adff-e63c-4e3c-ba69-4bdec469d5b8","type":"BasicTickFormatter"},"plot":{"id":"f1c9daa6-1330-4d6a-a654-aa0378a2839b","subtype":"Figure","type":"Plot"},"ticker":{"id":"872c8e37-b0c6-4cb6-8de5-141e6f00f29b","type":"BasicTicker"}},"id":"f0ed7642-7e5b-441f-97e3-299a19a5bf5a","type":"LinearAxis"},{"attributes":{"plot":null,"text":null},"id":"7b8890a9-3069-4401-bb19-f82d0daeea26","type":"Title"},{"attributes":{"formatter":{"id":"8dabc1d5-e722-4e7a-bbab-060c2fe1dcfb","type":"BasicTickFormatter"},"plot":{"id":"f1c9daa6-1330-4d6a-a654-aa0378a2839b","subtype":"Figure","type":"Plot"},"ticker":{"id":"6b7a9bf8-e789-4f5a-99e7-6488dbf91b49","type":"BasicTicker"}},"id":"d1c713ef-c5cf-41a6-9632-2ccc821abaaf","type":"LinearAxis"},{"attributes":{"callback":null},"id":"b9820f47-7308-42d5-bbbb-8444b2caff53","type":"DataRange1d"},{"attributes":{},"id":"2910adff-e63c-4e3c-ba69-4bdec469d5b8","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"f1c9daa6-1330-4d6a-a654-aa0378a2839b","subtype":"Figure","type":"Plot"}},"id":"932e63a6-b28a-41a4-b8eb-41720557e860","type":"SaveTool"},{"attributes":{"fill_color":{"value":"#1C9099"},"line_color":{"value":"#1C9099"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"2cd2cab0-02cf-4a6c-be64-0f11b5d4034c","type":"Diamond"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"a35984c8-446d-4035-ac3e-1e6b4777a6e8","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"648cd55d-382e-4332-8ceb-a8e51a6d5b86","type":"Diamond"},{"attributes":{},"id":"8dabc1d5-e722-4e7a-bbab-060c2fe1dcfb","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"f1c9daa6-1330-4d6a-a654-aa0378a2839b","subtype":"Figure","type":"Plot"}},"id":"a8bc710a-ea76-4d73-98b6-b6f7f07a3778","type":"PanTool"},{"attributes":{"plot":{"id":"f1c9daa6-1330-4d6a-a654-aa0378a2839b","subtype":"Figure","type":"Plot"}},"id":"f63e4eb2-b357-4347-8f25-6fd5903e7ab0","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"cb1d538d-8f52-455c-8f18-36bd8d341c7d","type":"BoxAnnotation"},{"attributes":{},"id":"872c8e37-b0c6-4cb6-8de5-141e6f00f29b","type":"BasicTicker"},{"attributes":{"plot":{"id":"f1c9daa6-1330-4d6a-a654-aa0378a2839b","subtype":"Figure","type":"Plot"}},"id":"ce2820dd-72d4-424f-ac04-429953cb730d","type":"HelpTool"},{"attributes":{"dimension":1,"plot":{"id":"f1c9daa6-1330-4d6a-a654-aa0378a2839b","subtype":"Figure","type":"Plot"},"ticker":{"id":"872c8e37-b0c6-4cb6-8de5-141e6f00f29b","type":"BasicTicker"}},"id":"2c967887-f218-4ea5-967b-aa199df0aac9","type":"Grid"},{"attributes":{"callback":null},"id":"f9e363c2-9cf8-417f-8beb-b7b4e46b4546","type":"DataRange1d"},{"attributes":{"data_source":{"id":"a35984c8-446d-4035-ac3e-1e6b4777a6e8","type":"ColumnDataSource"},"glyph":{"id":"2cd2cab0-02cf-4a6c-be64-0f11b5d4034c","type":"Diamond"},"hover_glyph":null,"nonselection_glyph":{"id":"648cd55d-382e-4332-8ceb-a8e51a6d5b86","type":"Diamond"},"selection_glyph":null},"id":"3f5e5191-a736-438b-a91c-784dacfeb0bd","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"d1c713ef-c5cf-41a6-9632-2ccc821abaaf","type":"LinearAxis"}],"left":[{"id":"f0ed7642-7e5b-441f-97e3-299a19a5bf5a","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"d1c713ef-c5cf-41a6-9632-2ccc821abaaf","type":"LinearAxis"},{"id":"bbefbc0e-6135-4ecb-be0b-d4c7faedaa89","type":"Grid"},{"id":"f0ed7642-7e5b-441f-97e3-299a19a5bf5a","type":"LinearAxis"},{"id":"2c967887-f218-4ea5-967b-aa199df0aac9","type":"Grid"},{"id":"cb1d538d-8f52-455c-8f18-36bd8d341c7d","type":"BoxAnnotation"},{"id":"3f5e5191-a736-438b-a91c-784dacfeb0bd","type":"GlyphRenderer"}],"title":{"id":"7b8890a9-3069-4401-bb19-f82d0daeea26","type":"Title"},"tool_events":{"id":"97d0a1ae-c328-411b-abaf-370eb3ce2332","type":"ToolEvents"},"toolbar":{"id":"0ee7c7d5-84a6-4a1d-9f1a-c58aa69766c1","type":"Toolbar"},"x_range":{"id":"b9820f47-7308-42d5-bbbb-8444b2caff53","type":"DataRange1d"},"y_range":{"id":"f9e363c2-9cf8-417f-8beb-b7b4e46b4546","type":"DataRange1d"}},"id":"f1c9daa6-1330-4d6a-a654-aa0378a2839b","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"97d0a1ae-c328-411b-abaf-370eb3ce2332","type":"ToolEvents"},{"attributes":{},"id":"6b7a9bf8-e789-4f5a-99e7-6488dbf91b49","type":"BasicTicker"},{"attributes":{"plot":{"id":"f1c9daa6-1330-4d6a-a654-aa0378a2839b","subtype":"Figure","type":"Plot"}},"id":"936e9d56-9935-4e58-8942-88b661307e60","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"cb1d538d-8f52-455c-8f18-36bd8d341c7d","type":"BoxAnnotation"},"plot":{"id":"f1c9daa6-1330-4d6a-a654-aa0378a2839b","subtype":"Figure","type":"Plot"}},"id":"95675d36-9307-4f2f-837b-1d6c8e00602a","type":"BoxZoomTool"}],"root_ids":["f1c9daa6-1330-4d6a-a654-aa0378a2839b"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"e1cc78ef-8b80-4346-8d18-e165e7d43042","elementid":"d1c6c164-bd0b-4ff5-abac-2f8a614018ec","modelid":"f1c9daa6-1330-4d6a-a654-aa0378a2839b"}];
                  
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