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
      };var element = document.getElementById("49bd17b6-0870-4ef5-ae30-e9801b85a68f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '49bd17b6-0870-4ef5-ae30-e9801b85a68f' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.0.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"768b38d1-7813-4a82-acad-8aa0495801d2":{"roots":{"references":[{"attributes":{"callback":null,"end":150,"start":-150},"id":"5ccb4213-45fa-4e82-8bb4-401c1bcdd610","type":"Range1d"},{"attributes":{"data_source":{"id":"b4f5fd01-44c6-4e39-bf5f-e1c9c001da4b","type":"ColumnDataSource"},"glyph":{"id":"f3c12873-8778-4e76-90e7-68bf2a994c5b","type":"Gear"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"6cfa21b1-2a29-4c03-a916-b5c38601467c","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"baba8187-d658-4fd9-aceb-14c62d351852","type":"ColumnDataSource"},"glyph":{"id":"04c8ba5c-487a-4f79-9deb-0d92181ffefa","type":"Gear"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"9d2b731d-bd8d-4d3f-912f-bf3a3e60c83d","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"baba8187-d658-4fd9-aceb-14c62d351852","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"a8ddfd0f-09ff-4278-9c7f-41809438a7d3","type":"ColumnDataSource"},{"attributes":{"callback":null,"end":150,"start":-150},"id":"0f2194f4-8366-46ce-8f25-5151ddf792ae","type":"Range1d"},{"attributes":{},"id":"09a53fd4-4361-4de8-a688-717bc1614c48","type":"ToolEvents"},{"attributes":{"data_source":{"id":"a8ddfd0f-09ff-4278-9c7f-41809438a7d3","type":"ColumnDataSource"},"glyph":{"id":"7f875251-75b0-4ca3-aa52-8d7b73e4ab9c","type":"Gear"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"b8956e04-a1a6-40fd-9539-0eb18c3b1309","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"b4f5fd01-44c6-4e39-bf5f-e1c9c001da4b","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#ddd0dd"},"internal":{"value":true},"line_color":{"value":"#606060"},"module":{"value":5},"teeth":{"value":48},"x":{"value":0},"y":{"value":0}},"id":"352e5e49-78a4-4883-a89b-787c76f1c0b3","type":"Gear"},{"attributes":{"angle":{"units":"rad","value":0.2617993877991494},"fill_color":{"value":"#d0d0e8"},"line_color":{"value":"#606060"},"module":{"value":5},"teeth":{"value":12},"x":{"value":0.0},"y":{"value":-90.0}},"id":"93a9fe57-90ee-4054-82fa-c38c7a43f079","type":"Gear"},{"attributes":{"fill_color":{"value":"#ddddd0"},"line_color":{"value":"#606060"},"module":{"value":5},"teeth":{"value":24},"x":{"value":0},"y":{"value":0}},"id":"f3c12873-8778-4e76-90e7-68bf2a994c5b","type":"Gear"},{"attributes":{"callback":null},"id":"144a5ae3-7dab-4e4d-9664-69f0ed3571bb","type":"ColumnDataSource"},{"attributes":{"angle":{"units":"rad","value":0.2617993877991494},"fill_color":{"value":"#d0d0e8"},"line_color":{"value":"#606060"},"module":{"value":5},"teeth":{"value":12},"x":{"value":0.0},"y":{"value":90.0}},"id":"31c83783-879d-4428-9659-51450f8fde37","type":"Gear"},{"attributes":{"angle":{"units":"rad","value":0.2617993877991494},"fill_color":{"value":"#d0d0e8"},"line_color":{"value":"#606060"},"module":{"value":5},"teeth":{"value":12},"x":{"value":90.0},"y":{"value":0.0}},"id":"04c8ba5c-487a-4f79-9deb-0d92181ffefa","type":"Gear"},{"attributes":{"data_source":{"id":"8e08754c-cdd1-4a61-9faa-d23bf0f42538","type":"ColumnDataSource"},"glyph":{"id":"93a9fe57-90ee-4054-82fa-c38c7a43f079","type":"Gear"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"d172e902-14b4-4a8e-ad8a-73c16c79e5b0","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"7630b681-95b4-4704-80bc-f843c19fd5b8","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"144a5ae3-7dab-4e4d-9664-69f0ed3571bb","type":"ColumnDataSource"},"glyph":{"id":"352e5e49-78a4-4883-a89b-787c76f1c0b3","type":"Gear"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"74fa6de5-72e5-4cf2-bc92-2c34066eed94","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"7630b681-95b4-4704-80bc-f843c19fd5b8","type":"ColumnDataSource"},"glyph":{"id":"31c83783-879d-4428-9659-51450f8fde37","type":"Gear"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"be1ec674-0cb8-42c4-b7e5-ee5b58a428cb","type":"GlyphRenderer"},{"attributes":{"h_symmetry":false,"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"74fa6de5-72e5-4cf2-bc92-2c34066eed94","type":"GlyphRenderer"},{"id":"6cfa21b1-2a29-4c03-a916-b5c38601467c","type":"GlyphRenderer"},{"id":"9d2b731d-bd8d-4d3f-912f-bf3a3e60c83d","type":"GlyphRenderer"},{"id":"be1ec674-0cb8-42c4-b7e5-ee5b58a428cb","type":"GlyphRenderer"},{"id":"b8956e04-a1a6-40fd-9539-0eb18c3b1309","type":"GlyphRenderer"},{"id":"d172e902-14b4-4a8e-ad8a-73c16c79e5b0","type":"GlyphRenderer"}],"title":null,"tool_events":{"id":"09a53fd4-4361-4de8-a688-717bc1614c48","type":"ToolEvents"},"toolbar":{"id":"5ad8f96e-9bf7-4a64-8805-d2f164355fa3","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"5ccb4213-45fa-4e82-8bb4-401c1bcdd610","type":"Range1d"},"y_range":{"id":"0f2194f4-8366-46ce-8f25-5151ddf792ae","type":"Range1d"}},"id":"598da725-0311-480b-b0af-295066859333","type":"Plot"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"5ad8f96e-9bf7-4a64-8805-d2f164355fa3","type":"Toolbar"},{"attributes":{"callback":null},"id":"8e08754c-cdd1-4a61-9faa-d23bf0f42538","type":"ColumnDataSource"},{"attributes":{"angle":{"units":"rad","value":0.2617993877991494},"fill_color":{"value":"#d0d0e8"},"line_color":{"value":"#606060"},"module":{"value":5},"teeth":{"value":12},"x":{"value":-90.0},"y":{"value":0.0}},"id":"7f875251-75b0-4ca3-aa52-8d7b73e4ab9c","type":"Gear"}],"root_ids":["598da725-0311-480b-b0af-295066859333"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"768b38d1-7813-4a82-acad-8aa0495801d2","elementid":"49bd17b6-0870-4ef5-ae30-e9801b85a68f","modelid":"598da725-0311-480b-b0af-295066859333"}];
              
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