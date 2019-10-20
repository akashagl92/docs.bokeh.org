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
      };var element = document.getElementById("897e0382-05c7-447c-912f-30096d32e344");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '897e0382-05c7-447c-912f-30096d32e344' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.1.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"ad88cb02-86a4-4729-a171-5149d3660e50":{"roots":{"references":[{"attributes":{"callback":null,"end":150,"start":-150},"id":"e542341f-6142-4f82-9c99-aaa506ec81cf","type":"Range1d"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"bd5ba993-9cec-40af-943c-b3f08382c2b8","type":"Toolbar"},{"attributes":{"data_source":{"id":"bf7cfd2e-1411-4a69-9735-006e9d300a2e","type":"ColumnDataSource"},"glyph":{"id":"5d4220a8-7370-4cef-935d-a5c69b5fccd8","type":"Gear"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"1057cf0a-4fc7-4072-8847-309d47af89c5","type":"GlyphRenderer"},{"attributes":{"angle":{"units":"rad","value":0.2617993877991494},"fill_color":{"value":"#d0d0e8"},"line_color":{"value":"#606060"},"module":{"value":5},"teeth":{"value":12},"x":{"value":0.0},"y":{"value":90.0}},"id":"5d4220a8-7370-4cef-935d-a5c69b5fccd8","type":"Gear"},{"attributes":{},"id":"3442b886-b6de-4441-9809-a57b0af63a92","type":"ToolEvents"},{"attributes":{"fill_color":{"value":"#ddddd0"},"line_color":{"value":"#606060"},"module":{"value":5},"teeth":{"value":24},"x":{"value":0},"y":{"value":0}},"id":"858956de-9f6a-4664-b096-67470c8c4201","type":"Gear"},{"attributes":{"data_source":{"id":"bd908be3-a057-4fe8-84ae-f4e15b554660","type":"ColumnDataSource"},"glyph":{"id":"4c70bfce-4fee-4a26-9e23-e85463305b5c","type":"Gear"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"bde2d2f9-d7db-441a-a788-25bddec7edd7","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"bd908be3-a057-4fe8-84ae-f4e15b554660","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"bf7cfd2e-1411-4a69-9735-006e9d300a2e","type":"ColumnDataSource"},{"attributes":{"angle":{"units":"rad","value":0.2617993877991494},"fill_color":{"value":"#d0d0e8"},"line_color":{"value":"#606060"},"module":{"value":5},"teeth":{"value":12},"x":{"value":90.0},"y":{"value":0.0}},"id":"21dce4b8-fe51-4557-94ba-25c14c134842","type":"Gear"},{"attributes":{"h_symmetry":false,"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"faf855d4-3962-46db-a446-77fce5f2d1b1","type":"GlyphRenderer"},{"id":"5761c4d2-8af1-435b-9051-15e2f3cb0485","type":"GlyphRenderer"},{"id":"e1c40819-0553-4b09-864f-90f9eb60eded","type":"GlyphRenderer"},{"id":"1057cf0a-4fc7-4072-8847-309d47af89c5","type":"GlyphRenderer"},{"id":"bde2d2f9-d7db-441a-a788-25bddec7edd7","type":"GlyphRenderer"},{"id":"e22acb17-b31b-4427-ac38-7d961c79382a","type":"GlyphRenderer"}],"title":null,"tool_events":{"id":"3442b886-b6de-4441-9809-a57b0af63a92","type":"ToolEvents"},"toolbar":{"id":"bd5ba993-9cec-40af-943c-b3f08382c2b8","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"e542341f-6142-4f82-9c99-aaa506ec81cf","type":"Range1d"},"y_range":{"id":"dcbd0ee9-47db-4413-a6df-992b9082b76a","type":"Range1d"}},"id":"3c3ccf19-dc66-4d35-a26d-91a7d26872c8","type":"Plot"},{"attributes":{"callback":null,"end":150,"start":-150},"id":"dcbd0ee9-47db-4413-a6df-992b9082b76a","type":"Range1d"},{"attributes":{"data_source":{"id":"33e9264e-b29e-485e-ae71-3efa02080182","type":"ColumnDataSource"},"glyph":{"id":"858956de-9f6a-4664-b096-67470c8c4201","type":"Gear"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"5761c4d2-8af1-435b-9051-15e2f3cb0485","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"e71165a7-c012-49f4-832a-73ebbbd5ce82","type":"ColumnDataSource"},{"attributes":{"angle":{"units":"rad","value":0.2617993877991494},"fill_color":{"value":"#d0d0e8"},"line_color":{"value":"#606060"},"module":{"value":5},"teeth":{"value":12},"x":{"value":-90.0},"y":{"value":0.0}},"id":"4c70bfce-4fee-4a26-9e23-e85463305b5c","type":"Gear"},{"attributes":{"data_source":{"id":"9b1f7d45-b1cc-43e1-874e-8205559ed230","type":"ColumnDataSource"},"glyph":{"id":"4023046d-fe09-4559-98dd-e447ab090b53","type":"Gear"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"e22acb17-b31b-4427-ac38-7d961c79382a","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#ddd0dd"},"internal":{"value":true},"line_color":{"value":"#606060"},"module":{"value":5},"teeth":{"value":48},"x":{"value":0},"y":{"value":0}},"id":"6af833c8-e184-47bc-bff3-38aa3efb66ba","type":"Gear"},{"attributes":{"callback":null},"id":"33e9264e-b29e-485e-ae71-3efa02080182","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"9b1f7d45-b1cc-43e1-874e-8205559ed230","type":"ColumnDataSource"},{"attributes":{"angle":{"units":"rad","value":0.2617993877991494},"fill_color":{"value":"#d0d0e8"},"line_color":{"value":"#606060"},"module":{"value":5},"teeth":{"value":12},"x":{"value":0.0},"y":{"value":-90.0}},"id":"4023046d-fe09-4559-98dd-e447ab090b53","type":"Gear"},{"attributes":{"data_source":{"id":"a10ec335-0944-48d3-9302-6e61d7e00238","type":"ColumnDataSource"},"glyph":{"id":"6af833c8-e184-47bc-bff3-38aa3efb66ba","type":"Gear"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"faf855d4-3962-46db-a446-77fce5f2d1b1","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"a10ec335-0944-48d3-9302-6e61d7e00238","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"e71165a7-c012-49f4-832a-73ebbbd5ce82","type":"ColumnDataSource"},"glyph":{"id":"21dce4b8-fe51-4557-94ba-25c14c134842","type":"Gear"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"e1c40819-0553-4b09-864f-90f9eb60eded","type":"GlyphRenderer"}],"root_ids":["3c3ccf19-dc66-4d35-a26d-91a7d26872c8"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"ad88cb02-86a4-4729-a171-5149d3660e50","elementid":"897e0382-05c7-447c-912f-30096d32e344","modelid":"3c3ccf19-dc66-4d35-a26d-91a7d26872c8"}];
              
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