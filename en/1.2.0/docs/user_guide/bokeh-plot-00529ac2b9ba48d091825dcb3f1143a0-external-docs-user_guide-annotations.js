(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };var element = document.getElementById("b8f2d0e6-d9dd-43a4-8cc5-c67ca92d0e0a");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'b8f2d0e6-d9dd-43a4-8cc5-c67ca92d0e0a' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.2.0.min.js"];
      var css_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.2.0.min.css", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.2.0.min.css", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.2.0.min.css"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"f6beeb39-0ce3-4b85-bc71-e70e2b7a55e4":{"roots":{"references":[{"attributes":{"data_source":{"id":"19564","type":"ColumnDataSource"},"glyph":{"id":"19565","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19566","type":"Circle"},"selection_glyph":null,"view":{"id":"19568","type":"CDSView"}},"id":"19567","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"19599","type":"ColumnDataSource"},"glyph":{"id":"19600","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19601","type":"Circle"},"selection_glyph":null,"view":{"id":"19603","type":"CDSView"}},"id":"19602","type":"GlyphRenderer"},{"attributes":{},"id":"19632","type":"BasicTickFormatter"},{"attributes":{},"id":"19653","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"goldenrod"},"line_color":{"value":"goldenrod"},"x":{"value":73},"y":{"field":"y"}},"id":"19580","type":"Circle"},{"attributes":{"fill_color":{"value":"goldenrod"},"line_color":{"value":"goldenrod"},"x":{"value":80},"y":{"field":"y"}},"id":"19615","type":"Circle"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"AAAAAAAAKkAAAAAAAAAsQAAAAAAAACpAAAAAAAAALEAAAAAAAAAuQAAAAAAAAChAAAAAAAAAKkAAAAAAAAAqQAAAAAAAACxAAAAAAAAAKkAAAAAAAAAoQAAAAAAAACpAAAAAAAAAMkAAAAAAAAAwQAAAAAAAADJAAAAAAAAAMkAAAAAAAAA3QAAAAAAAADpAAAAAAAAAJkAAAAAAAAAoQAAAAAAAACpAAAAAAAAAKEAAAAAAAAAyQAAAAAAAADRAAAAAAAAANUAAAAAAAAA2QAAAAAAAADJAAAAAAAAAM0AAAAAAAAA1QAAAAAAAADpAAAAAAAAALkAAAAAAAAAwQAAAAAAAAD1AAAAAAAAAOEAAAAAAAAA0QAAAAAAAADNAAAAAAAAALkAAAAAAAAA4QAAAAAAAADRAAAAAAAAAJkA=","dtype":"float64","shape":[40]}},"selected":{"id":"19642","type":"Selection"},"selection_policy":{"id":"19643","type":"UnionRenderers"}},"id":"19579","type":"ColumnDataSource"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"zczMzMyMRUDNzMzMzAxCQGZmZmZmZkBAMzMzMzOzQ0DNzMzMzAxCQGZmZmZm5jNAZmZmZmZmM0AzMzMzMzM0QDMzMzMzMzNAAAAAAACANEAzMzMzMzM0QJqZmZmZGTlAAAAAAACANEBmZmZmZmYzQJqZmZmZmTRAzczMzMzMNECamZmZmZkyQJqZmZmZGTJAMzMzMzMzM0AzMzMzM7MxQJqZmZmZGTJAAAAAAACAMUAAAAAAAAA+QAAAAAAAgDtAMzMzMzMzO0BmZmZmZuY+QJqZmZmZGTVAMzMzMzMzN0DNzMzMzMw3QGZmZmZm5jdAzczMzMxMNEAAAAAAAAAxQJqZmZmZmTVAMzMzMzMzMEAAAAAAAIA/QAAAAAAAgD1A","dtype":"float64","shape":[36]}},"selected":{"id":"19652","type":"Selection"},"selection_policy":{"id":"19653","type":"UnionRenderers"}},"id":"19604","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"x":{"value":70},"y":{"field":"y"}},"id":"19565","type":"Circle"},{"attributes":{"fill_color":{"value":"skyblue"},"line_color":{"value":"skyblue"},"x":{"value":74},"y":{"field":"y"}},"id":"19585","type":"Circle"},{"attributes":{},"id":"19549","type":"WheelZoomTool"},{"attributes":{},"id":"19652","type":"Selection"},{"attributes":{"base":{"field":"base","units":"data"},"lower":{"field":"lower","units":"data"},"lower_head":{"id":"19634","type":"TeeHead"},"source":{"id":"19561","type":"ColumnDataSource"},"upper":{"field":"upper","units":"data"},"upper_head":{"id":"19635","type":"TeeHead"}},"id":"19562","type":"Whisker"},{"attributes":{"source":{"id":"19594","type":"ColumnDataSource"}},"id":"19598","type":"CDSView"},{"attributes":{"source":{"id":"19599","type":"ColumnDataSource"}},"id":"19603","type":"CDSView"},{"attributes":{},"id":"19647","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"19609","type":"ColumnDataSource"},"glyph":{"id":"19610","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19611","type":"Circle"},"selection_glyph":null,"view":{"id":"19613","type":"CDSView"}},"id":"19612","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":74},"y":{"field":"y"}},"id":"19586","type":"Circle"},{"attributes":{},"id":"19640","type":"Selection"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"AAAAAAAAMkAAAAAAAAAuQAAAAAAAADJAAAAAAAAAMEAAAAAAAAAxQAAAAAAAAC5AAAAAAAAALEAAAAAAAAAsQAAAAAAAACxAAAAAAAAALkAAAAAAAAAuQAAAAAAAACxAAAAAAAAALkAAAAAAAAAsQAAAAAAAADhAAAAAAAAANkAAAAAAAAAyQAAAAAAAADVAAAAAAAAAO0AAAAAAAAA6QAAAAAAAADlAAAAAAAAAOEAAAAAAAAA5QAAAAAAAADpAAAAAAAAANUAAAAAAAAAkQAAAAAAAACRAAAAAAAAAJkAAAAAAAAAiQA==","dtype":"float64","shape":[29]}},"selected":{"id":"19636","type":"Selection"},"selection_policy":{"id":"19637","type":"UnionRenderers"}},"id":"19564","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"orange"},"x":{"value":75},"y":{"field":"y"}},"id":"19590","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":78},"y":{"field":"y"}},"id":"19606","type":"Circle"},{"attributes":{},"id":"19536","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":73},"y":{"field":"y"}},"id":"19581","type":"Circle"},{"attributes":{"level":"underlay","size":10},"id":"19634","type":"TeeHead"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"19662","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"19594","type":"ColumnDataSource"},"glyph":{"id":"19595","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19596","type":"Circle"},"selection_glyph":null,"view":{"id":"19598","type":"CDSView"}},"id":"19597","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"AAAAAAAAOEAAAAAAAAA5QAAAAAAAADdAAAAAAAAANEAAAAAAAAA1QAAAAAAAACpAAAAAAAAALEAAAAAAAAAuQAAAAAAAACxAAAAAAAAAMUAAAAAAAAAmQAAAAAAAACpAAAAAAAAAKEAAAAAAAAAqQAAAAAAAADNAAAAAAAAALkAAAAAAAAAqQAAAAAAAACpAAAAAAAAALEAAAAAAAAAyQAAAAAAAADZAAAAAAAAANUAAAAAAAAA6QAAAAAAAADZAAAAAAAAAPEAAAAAAAAA3QAAAAAAAADxAAAAAAAAAO0A=","dtype":"float64","shape":[28]}},"selected":{"id":"19640","type":"Selection"},"selection_policy":{"id":"19641","type":"UnionRenderers"}},"id":"19574","type":"ColumnDataSource"},{"attributes":{"source":{"id":"19624","type":"ColumnDataSource"}},"id":"19628","type":"CDSView"},{"attributes":{},"id":"19552","type":"ResetTool"},{"attributes":{"data_source":{"id":"19624","type":"ColumnDataSource"},"glyph":{"id":"19625","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19626","type":"Circle"},"selection_glyph":null,"view":{"id":"19628","type":"CDSView"}},"id":"19627","type":"GlyphRenderer"},{"attributes":{"source":{"id":"19584","type":"ColumnDataSource"}},"id":"19588","type":"CDSView"},{"attributes":{},"id":"19656","type":"Selection"},{"attributes":{"callback":null},"id":"19530","type":"DataRange1d"},{"attributes":{"data_source":{"id":"19589","type":"ColumnDataSource"},"glyph":{"id":"19590","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19591","type":"Circle"},"selection_glyph":null,"view":{"id":"19593","type":"CDSView"}},"id":"19592","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"AAAAAADAREDNzMzMzAxDQM3MzMzMDEBAmpmZmZmZQkAAAAAAAAA8QGZmZmZmZjpAzczMzMxMOECamZmZmRkzQGZmZmZmJkFAzczMzMzMPUDNzMzMzEw/QAAAAAAAgEJAmpmZmZkZQEDNzMzMzExHQGZmZmZm5jtAZmZmZmZmREBmZmZmZiZGQDMzMzMzs0VAMzMzMzMzQkAAAAAAAAA+QM3MzMzMTEZAZmZmZmbmQEDNzMzMzMw9QJqZmZmZWUBAMzMzMzOzN0AAAAAAAIBBQDMzMzMzM0BA","dtype":"float64","shape":[27]}},"selected":{"id":"19656","type":"Selection"},"selection_policy":{"id":"19657","type":"UnionRenderers"}},"id":"19614","type":"ColumnDataSource"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"AAAAAAAAM0AAAAAAAAAyQAAAAAAAAC5AAAAAAAAALkAAAAAAAAAwQAAAAAAAAC5AAAAAAAAAMEAAAAAAAAAsQAAAAAAAADFAAAAAAAAAMEAAAAAAAAAuQAAAAAAAADJAAAAAAAAANUAAAAAAAAA0QAAAAAAAACpAAAAAAAAAPUAAAAAAAAA3QAAAAAAAADRAAAAAAAAAN0AAAAAAAAA4QAAAAAAAADlAAAAAAAAAOEAAAAAAAAAyQAAAAAAAAD1AAAAAAAAAM0AAAAAAAAA3QAAAAAAAADdAAAAAAAAANkAAAAAAAAA5QAAAAAAAgEBA","dtype":"float64","shape":[30]}},"selected":{"id":"19646","type":"Selection"},"selection_policy":{"id":"19647","type":"UnionRenderers"}},"id":"19589","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"salmon"},"line_color":{"value":"salmon"},"x":{"value":76},"y":{"field":"y"}},"id":"19595","type":"Circle"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"AAAAAAAAPEAAAAAAAAA7QAAAAAAAAEFAAAAAAAAAP0AAAAAAAAA9QAAAAAAAADtAAAAAAAAAOEAAAAAAAABCQAAAAAAAgEJAAAAAAAAAP0AAAAAAAABDQAAAAAAAAEJAAAAAAAAAQkAAAAAAAABCQAAAAAAAAEFAAAAAAAAAQ0AAAAAAAABAQAAAAAAAAENAAAAAAAAAOUAAAAAAAABDQAAAAAAAADpAAAAAAAAANkAAAAAAAABAQAAAAAAAAEJAAAAAAAAAO0AAAAAAAAA7QAAAAAAAAEZAAAAAAAAAQEAAAAAAAAA8QAAAAAAAAD9A","dtype":"float64","shape":[30]}},"selected":{"id":"19660","type":"Selection"},"selection_policy":{"id":"19661","type":"UnionRenderers"}},"id":"19624","type":"ColumnDataSource"},{"attributes":{},"id":"19641","type":"UnionRenderers"},{"attributes":{"below":[{"id":"19538","type":"LinearAxis"}],"center":[{"id":"19542","type":"Grid"},{"id":"19547","type":"Grid"},{"id":"19562","type":"Whisker"}],"left":[{"id":"19543","type":"LinearAxis"}],"plot_height":300,"renderers":[{"id":"19567","type":"GlyphRenderer"},{"id":"19572","type":"GlyphRenderer"},{"id":"19577","type":"GlyphRenderer"},{"id":"19582","type":"GlyphRenderer"},{"id":"19587","type":"GlyphRenderer"},{"id":"19592","type":"GlyphRenderer"},{"id":"19597","type":"GlyphRenderer"},{"id":"19602","type":"GlyphRenderer"},{"id":"19607","type":"GlyphRenderer"},{"id":"19612","type":"GlyphRenderer"},{"id":"19617","type":"GlyphRenderer"},{"id":"19622","type":"GlyphRenderer"},{"id":"19627","type":"GlyphRenderer"}],"title":{"id":"19528","type":"Title"},"toolbar":{"id":"19554","type":"Toolbar"},"x_range":{"id":"19530","type":"DataRange1d"},"x_scale":{"id":"19534","type":"LinearScale"},"y_range":{"id":"19532","type":"DataRange1d"},"y_scale":{"id":"19536","type":"LinearScale"}},"id":"19527","subtype":"Figure","type":"Plot"},{"attributes":{"fill_color":{"value":"darkred"},"line_color":{"value":"darkred"},"x":{"value":72},"y":{"field":"y"}},"id":"19575","type":"Circle"},{"attributes":{"source":{"id":"19579","type":"ColumnDataSource"}},"id":"19583","type":"CDSView"},{"attributes":{"data_source":{"id":"19569","type":"ColumnDataSource"},"glyph":{"id":"19570","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19571","type":"Circle"},"selection_glyph":null,"view":{"id":"19573","type":"CDSView"}},"id":"19572","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"19532","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"AAAAAACANUDNzMzMzMwzQM3MzMzMTDZAMzMzMzMzNECamZmZmZk0QAAAAAAAADFAmpmZmZmZMUAAAAAAAIAwQDMzMzMzMzJAZmZmZmbmMEAAAAAAAAAvQDMzMzMzMzNAAAAAAACAMkBmZmZmZuY/QM3MzMzMDEFAmpmZmZnZQUBmZmZmZmY7QGZmZmZmZjlAAAAAAAAAN0AzMzMzMzM7QGZmZmZm5jdAmpmZmZkZQUAAAAAAAEBBQM3MzMzMzD9AZmZmZmamQkBmZmZmZmY8QM3MzMzMzDxAzczMzMzMOkAAAAAAAMBAQA==","dtype":"float64","shape":[29]}},"selected":{"id":"19654","type":"Selection"},"selection_policy":{"id":"19655","type":"UnionRenderers"}},"id":"19609","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"19579","type":"ColumnDataSource"},"glyph":{"id":"19580","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19581","type":"Circle"},"selection_glyph":null,"view":{"id":"19583","type":"CDSView"}},"id":"19582","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"19548","type":"PanTool"},{"id":"19549","type":"WheelZoomTool"},{"id":"19550","type":"BoxZoomTool"},{"id":"19551","type":"SaveTool"},{"id":"19552","type":"ResetTool"},{"id":"19553","type":"HelpTool"}]},"id":"19554","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":77},"y":{"field":"y"}},"id":"19601","type":"Circle"},{"attributes":{},"id":"19663","type":"Selection"},{"attributes":{},"id":"19643","type":"UnionRenderers"},{"attributes":{"source":{"id":"19564","type":"ColumnDataSource"}},"id":"19568","type":"CDSView"},{"attributes":{},"id":"19646","type":"Selection"},{"attributes":{"data_source":{"id":"19619","type":"ColumnDataSource"},"glyph":{"id":"19620","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19621","type":"Circle"},"selection_glyph":null,"view":{"id":"19623","type":"CDSView"}},"id":"19622","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":75},"y":{"field":"y"}},"id":"19591","type":"Circle"},{"attributes":{},"id":"19657","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":71},"y":{"field":"y"}},"id":"19571","type":"Circle"},{"attributes":{"source":{"id":"19619","type":"ColumnDataSource"}},"id":"19623","type":"CDSView"},{"attributes":{},"id":"19651","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":70},"y":{"field":"y"}},"id":"19566","type":"Circle"},{"attributes":{},"id":"19551","type":"SaveTool"},{"attributes":{},"id":"19661","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"AAAAAAAAO0AAAAAAAAA8QAAAAAAAADlAAAAAAAAAM0AAAAAAAAAwQAAAAAAAADFAAAAAAAAAM0AAAAAAAAAyQAAAAAAAACxAAAAAAAAALEAAAAAAAAAsQAAAAAAAACxAAAAAAAAAKEAAAAAAAAAqQAAAAAAAACpAAAAAAAAAMkAAAAAAAAA2QAAAAAAAADNAAAAAAAAAMkAAAAAAAAA3QAAAAAAAADxAAAAAAAAAPkAAAAAAAAA+QAAAAAAAAD9AAAAAAACAQUAAAAAAAAA7QAAAAAAAADpA","dtype":"float64","shape":[27]}},"selected":{"id":"19638","type":"Selection"},"selection_policy":{"id":"19639","type":"UnionRenderers"}},"id":"19569","type":"ColumnDataSource"},{"attributes":{"source":{"id":"19574","type":"ColumnDataSource"}},"id":"19578","type":"CDSView"},{"attributes":{},"id":"19659","type":"UnionRenderers"},{"attributes":{},"id":"19630","type":"BasicTickFormatter"},{"attributes":{},"id":"19649","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"19584","type":"ColumnDataSource"},"glyph":{"id":"19585","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19586","type":"Circle"},"selection_glyph":null,"view":{"id":"19588","type":"CDSView"}},"id":"19587","type":"GlyphRenderer"},{"attributes":{},"id":"19534","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":80},"y":{"field":"y"}},"id":"19616","type":"Circle"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"AAAAAAAANEAAAAAAAAAzQAAAAAAAAC5AAAAAAAAAP0AAAAAAAAA6QAAAAAAAAEBAAAAAAAAAOUAAAAAAAAAwQAAAAAAAADBAAAAAAAAAMkAAAAAAAAAwQAAAAAAAACpAAAAAAAAALEAAAAAAAAAsQAAAAAAAACxAAAAAAAAAPUAAAAAAAAA6QAAAAAAAADpAAAAAAAAAP0AAAAAAAABAQAAAAAAAADxAAAAAAAAAOEAAAAAAAAA6QAAAAAAAADhAAAAAAAAAOkAAAAAAAAA/QA==","dtype":"float64","shape":[26]}},"selected":{"id":"19644","type":"Selection"},"selection_policy":{"id":"19645","type":"UnionRenderers"}},"id":"19584","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":81},"y":{"field":"y"}},"id":"19621","type":"Circle"},{"attributes":{"fill_color":{"value":"olive"},"line_color":{"value":"olive"},"x":{"value":71},"y":{"field":"y"}},"id":"19570","type":"Circle"},{"attributes":{"data_source":{"id":"19604","type":"ColumnDataSource"},"glyph":{"id":"19605","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19606","type":"Circle"},"selection_glyph":null,"view":{"id":"19608","type":"CDSView"}},"id":"19607","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":72},"y":{"field":"y"}},"id":"19576","type":"Circle"},{"attributes":{"fill_color":{"value":"skyblue"},"line_color":{"value":"skyblue"},"x":{"value":81},"y":{"field":"y"}},"id":"19620","type":"Circle"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"MzMzMzMzO0CamZmZmZk6QM3MzMzMzDlAAAAAAACAN0AAAAAAAAA+QM3MzMzMjENAAAAAAACAQ0DNzMzMzIxBQGZmZmZmJkBAAAAAAACAQkCamZmZmdlCQM3MzMzMDEFAmpmZmZlZQUAzMzMzMzNBQGZmZmZm5j1AAAAAAACAQECamZmZmdlAQDMzMzMzM0BAMzMzMzNzQECamZmZmZk/QJqZmZmZGTxAMzMzMzOzPkBmZmZmZmY5QDMzMzMzMzhAZmZmZmZmNkCamZmZmZk6QDMzMzMzMzRAmpmZmZmZMUA=","dtype":"float64","shape":[28]}},"selected":{"id":"19658","type":"Selection"},"selection_policy":{"id":"19659","type":"UnionRenderers"}},"id":"19619","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"orange"},"x":{"value":82},"y":{"field":"y"}},"id":"19625","type":"Circle"},{"attributes":{},"id":"19548","type":"PanTool"},{"attributes":{"source":{"id":"19589","type":"ColumnDataSource"}},"id":"19593","type":"CDSView"},{"attributes":{"source":{"id":"19569","type":"ColumnDataSource"}},"id":"19573","type":"CDSView"},{"attributes":{"formatter":{"id":"19630","type":"BasicTickFormatter"},"ticker":{"id":"19544","type":"BasicTicker"}},"id":"19543","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"AAAAAACAP0AAAAAAAAA+QAAAAAAAAEJAAAAAAACAOUAAAAAAAMBAQAAAAAAAgDFAAAAAAAAAMUAAAAAAAAAvQAAAAAAAAC5AAAAAAACAMUAAAAAAAIA0QAAAAAAAADNAAAAAAACAMkAAAAAAAAAwQAAAAAAAAC9AAAAAAAAAL0AAAAAAAAAwQAAAAAAAAD1AAAAAAACAOEAAAAAAAAA6QAAAAAAAgDlAAAAAAACAPkAAAAAAAMBAQAAAAAAAAD5AAAAAAACAPkAAAAAAAAA2QAAAAAAAgDVAAAAAAACANUA=","dtype":"float64","shape":[28]}},"selected":{"id":"19650","type":"Selection"},"selection_policy":{"id":"19651","type":"UnionRenderers"}},"id":"19599","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":82},"y":{"field":"y"}},"id":"19626","type":"Circle"},{"attributes":{},"id":"19655","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"olive"},"line_color":{"value":"olive"},"x":{"value":78},"y":{"field":"y"}},"id":"19605","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":79},"y":{"field":"y"}},"id":"19611","type":"Circle"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"x":{"value":77},"y":{"field":"y"}},"id":"19600","type":"Circle"},{"attributes":{},"id":"19664","type":"UnionRenderers"},{"attributes":{},"id":"19644","type":"Selection"},{"attributes":{"data_source":{"id":"19574","type":"ColumnDataSource"},"glyph":{"id":"19575","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19576","type":"Circle"},"selection_glyph":null,"view":{"id":"19578","type":"CDSView"}},"id":"19577","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"base":[70,71,72,73,74,75,76,77,78,79,80,81,82],"lower":[12.350424032768164,14.435476117786315,13.278756895028701,12.399754507229684,16.231294138716876,15.326100362861114,15.684232040310981,16.69913828561214,17.163066759773855,18.298886840723156,26.91784967134245,24.550394827438176,26.767475719614136],"upper":[23.028886312059424,27.786746104435906,24.14981453354273,21.80024549277032,29.307167399744664,25.20723297047222,27.462826783218432,30.05086171438786,30.959155462448372,31.887320055828546,40.689557736064955,35.821033743990405,37.23252428038586]},"selected":{"id":"19663","type":"Selection"},"selection_policy":{"id":"19664","type":"UnionRenderers"}},"id":"19561","type":"ColumnDataSource"},{"attributes":{},"id":"19650","type":"Selection"},{"attributes":{"text":"Years vs mpg with Quartile Ranges"},"id":"19528","type":"Title"},{"attributes":{"ticker":{"id":"19539","type":"BasicTicker"}},"id":"19542","type":"Grid"},{"attributes":{"source":{"id":"19614","type":"ColumnDataSource"}},"id":"19618","type":"CDSView"},{"attributes":{"fill_color":{"value":"darkred"},"line_color":{"value":"darkred"},"x":{"value":79},"y":{"field":"y"}},"id":"19610","type":"Circle"},{"attributes":{},"id":"19648","type":"Selection"},{"attributes":{"dimension":1,"ticker":{"id":"19544","type":"BasicTicker"}},"id":"19547","type":"Grid"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"AAAAAAAAPEAAAAAAAAA5QAAAAAAAADlAAAAAAAAAOkAAAAAAAAA7QAAAAAAAgDFAAAAAAAAAMEAAAAAAAAAvQAAAAAAAAC1AAAAAAAAANkAAAAAAAAA2QAAAAAAAADhAAAAAAACANkAAAAAAAAA9QAAAAAAAgDhAAAAAAAAAPUAAAAAAAIBAQAAAAAAAADRAAAAAAAAAMkAAAAAAAIAyQAAAAAAAgDFAAAAAAACAPUAAAAAAAABAQAAAAAAAADxAAAAAAACAOkAAAAAAAAA0QAAAAAAAACpAAAAAAAAAM0AAAAAAAAAzQAAAAAAAgDBAAAAAAACAMEAAAAAAAAAqQAAAAAAAACpAAAAAAAAAKkA=","dtype":"float64","shape":[34]}},"selected":{"id":"19648","type":"Selection"},"selection_policy":{"id":"19649","type":"UnionRenderers"}},"id":"19594","type":"ColumnDataSource"},{"attributes":{"source":{"id":"19604","type":"ColumnDataSource"}},"id":"19608","type":"CDSView"},{"attributes":{},"id":"19638","type":"Selection"},{"attributes":{"overlay":{"id":"19662","type":"BoxAnnotation"}},"id":"19550","type":"BoxZoomTool"},{"attributes":{},"id":"19637","type":"UnionRenderers"},{"attributes":{},"id":"19654","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":76},"y":{"field":"y"}},"id":"19596","type":"Circle"},{"attributes":{},"id":"19660","type":"Selection"},{"attributes":{},"id":"19639","type":"UnionRenderers"},{"attributes":{"source":{"id":"19609","type":"ColumnDataSource"}},"id":"19613","type":"CDSView"},{"attributes":{},"id":"19553","type":"HelpTool"},{"attributes":{},"id":"19642","type":"Selection"},{"attributes":{"data_source":{"id":"19614","type":"ColumnDataSource"},"glyph":{"id":"19615","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19616","type":"Circle"},"selection_glyph":null,"view":{"id":"19618","type":"CDSView"}},"id":"19617","type":"GlyphRenderer"},{"attributes":{},"id":"19539","type":"BasicTicker"},{"attributes":{"level":"underlay","size":10},"id":"19635","type":"TeeHead"},{"attributes":{},"id":"19658","type":"Selection"},{"attributes":{},"id":"19645","type":"UnionRenderers"},{"attributes":{},"id":"19636","type":"Selection"},{"attributes":{"formatter":{"id":"19632","type":"BasicTickFormatter"},"ticker":{"id":"19539","type":"BasicTicker"}},"id":"19538","type":"LinearAxis"},{"attributes":{},"id":"19544","type":"BasicTicker"}],"root_ids":["19527"]},"title":"Bokeh Application","version":"1.2.0"}}';
                  var render_items = [{"docid":"f6beeb39-0ce3-4b85-bc71-e70e2b7a55e4","roots":{"19527":"b8f2d0e6-d9dd-43a4-8cc5-c67ca92d0e0a"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        embed_document(root);
                        clearInterval(timer);
                      }
                      attempts++;
                      if (attempts > 100) {
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        clearInterval(timer);
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {} // ensure no trailing comma for IE
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();