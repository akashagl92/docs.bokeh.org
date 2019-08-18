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
      };var element = document.getElementById("12a32513-cb3e-4ca0-8892-7d7997dd3ed7");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '12a32513-cb3e-4ca0-8892-7d7997dd3ed7' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.0.min.js"];
      var css_urls = [];
    
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
                    
                  var docs_json = '{"629ae88e-dddd-4a1c-a4a5-e1b24401605e":{"roots":{"references":[{"attributes":{},"id":"19573","type":"HelpTool"},{"attributes":{"data_source":{"id":"19624","type":"ColumnDataSource"},"glyph":{"id":"19625","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19626","type":"Circle"},"selection_glyph":null,"view":{"id":"19628","type":"CDSView"}},"id":"19627","type":"GlyphRenderer"},{"attributes":{},"id":"19664","type":"Selection"},{"attributes":{"callback":null},"id":"19552","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":76},"y":{"field":"y"}},"id":"19616","type":"Circle"},{"attributes":{"fill_color":{"value":"skyblue"},"line_color":{"value":"skyblue"},"x":{"value":74},"y":{"field":"y"}},"id":"19605","type":"Circle"},{"attributes":{},"id":"19554","type":"LinearScale"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"x":{"value":77},"y":{"field":"y"}},"id":"19620","type":"Circle"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"AAAAAAAANEAAAAAAAAAzQAAAAAAAAC5AAAAAAAAAP0AAAAAAAAA6QAAAAAAAAEBAAAAAAAAAOUAAAAAAAAAwQAAAAAAAADBAAAAAAAAAMkAAAAAAAAAwQAAAAAAAACpAAAAAAAAALEAAAAAAAAAsQAAAAAAAACxAAAAAAAAAPUAAAAAAAAA6QAAAAAAAADpAAAAAAAAAP0AAAAAAAABAQAAAAAAAADxAAAAAAAAAOEAAAAAAAAA6QAAAAAAAADhAAAAAAAAAOkAAAAAAAAA/QA==","dtype":"float64","shape":[26]}},"selected":{"id":"19668","type":"Selection"},"selection_policy":{"id":"19667","type":"UnionRenderers"}},"id":"19604","type":"ColumnDataSource"},{"attributes":{},"id":"19668","type":"Selection"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"AAAAAACAP0AAAAAAAAA+QAAAAAAAAEJAAAAAAACAOUAAAAAAAMBAQAAAAAAAgDFAAAAAAAAAMUAAAAAAAAAvQAAAAAAAAC5AAAAAAACAMUAAAAAAAIA0QAAAAAAAADNAAAAAAACAMkAAAAAAAAAwQAAAAAAAAC9AAAAAAAAAL0AAAAAAAAAwQAAAAAAAAD1AAAAAAACAOEAAAAAAAAA6QAAAAAAAgDlAAAAAAACAPkAAAAAAAMBAQAAAAAAAAD5AAAAAAACAPkAAAAAAAAA2QAAAAAAAgDVAAAAAAACANUA=","dtype":"float64","shape":[28]}},"selected":{"id":"19674","type":"Selection"},"selection_policy":{"id":"19673","type":"UnionRenderers"}},"id":"19619","type":"ColumnDataSource"},{"attributes":{},"id":"19659","type":"UnionRenderers"},{"attributes":{"source":{"id":"19624","type":"ColumnDataSource"}},"id":"19628","type":"CDSView"},{"attributes":{"data_source":{"id":"19594","type":"ColumnDataSource"},"glyph":{"id":"19595","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19596","type":"Circle"},"selection_glyph":null,"view":{"id":"19598","type":"CDSView"}},"id":"19597","type":"GlyphRenderer"},{"attributes":{},"id":"19676","type":"Selection"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"x":{"value":70},"y":{"field":"y"}},"id":"19585","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":73},"y":{"field":"y"}},"id":"19601","type":"Circle"},{"attributes":{"source":{"id":"19619","type":"ColumnDataSource"}},"id":"19623","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":72},"y":{"field":"y"}},"id":"19596","type":"Circle"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"orange"},"x":{"value":82},"y":{"field":"y"}},"id":"19645","type":"Circle"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"zczMzMyMRUDNzMzMzAxCQGZmZmZmZkBAMzMzMzOzQ0DNzMzMzAxCQGZmZmZm5jNAZmZmZmZmM0AzMzMzMzM0QDMzMzMzMzNAAAAAAACANEAzMzMzMzM0QJqZmZmZGTlAAAAAAACANEBmZmZmZmYzQJqZmZmZmTRAzczMzMzMNECamZmZmZkyQJqZmZmZGTJAMzMzMzMzM0AzMzMzM7MxQJqZmZmZGTJAAAAAAACAMUAAAAAAAAA+QAAAAAAAgDtAMzMzMzMzO0BmZmZmZuY+QJqZmZmZGTVAMzMzMzMzN0DNzMzMzMw3QGZmZmZm5jdAzczMzMxMNEAAAAAAAAAxQJqZmZmZmTVAMzMzMzMzMEAAAAAAAIA/QAAAAAAAgD1A","dtype":"float64","shape":[36]}},"selected":{"id":"19676","type":"Selection"},"selection_policy":{"id":"19675","type":"UnionRenderers"}},"id":"19624","type":"ColumnDataSource"},{"attributes":{},"id":"19669","type":"UnionRenderers"},{"attributes":{"dimension":1,"ticker":{"id":"19564","type":"BasicTicker"}},"id":"19567","type":"Grid"},{"attributes":{},"id":"19663","type":"UnionRenderers"},{"attributes":{},"id":"19674","type":"Selection"},{"attributes":{"fill_color":{"value":"salmon"},"line_color":{"value":"salmon"},"x":{"value":76},"y":{"field":"y"}},"id":"19615","type":"Circle"},{"attributes":{},"id":"19661","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"19589","type":"ColumnDataSource"},"glyph":{"id":"19590","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19591","type":"Circle"},"selection_glyph":null,"view":{"id":"19593","type":"CDSView"}},"id":"19592","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"base":[70,71,72,73,74,75,76,77,78,79,80,81,82],"lower":[12.350424032768164,14.435476117786315,13.278756895028701,12.399754507229684,16.231294138716876,15.326100362861114,15.684232040310981,16.69913828561214,17.163066759773855,18.298886840723156,26.91784967134245,24.550394827438176,26.767475719614136],"upper":[23.028886312059424,27.786746104435906,24.14981453354273,21.80024549277032,29.307167399744664,25.20723297047222,27.462826783218432,30.05086171438786,30.959155462448372,31.887320055828546,40.689557736064955,35.821033743990405,37.23252428038586]},"selected":{"id":"19658","type":"Selection"},"selection_policy":{"id":"19657","type":"UnionRenderers"}},"id":"19581","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"19634","type":"ColumnDataSource"},"glyph":{"id":"19635","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19636","type":"Circle"},"selection_glyph":null,"view":{"id":"19638","type":"CDSView"}},"id":"19637","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":82},"y":{"field":"y"}},"id":"19646","type":"Circle"},{"attributes":{"data_source":{"id":"19584","type":"ColumnDataSource"},"glyph":{"id":"19585","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19586","type":"Circle"},"selection_glyph":null,"view":{"id":"19588","type":"CDSView"}},"id":"19587","type":"GlyphRenderer"},{"attributes":{"ticker":{"id":"19559","type":"BasicTicker"}},"id":"19562","type":"Grid"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"AAAAAACANUDNzMzMzMwzQM3MzMzMTDZAMzMzMzMzNECamZmZmZk0QAAAAAAAADFAmpmZmZmZMUAAAAAAAIAwQDMzMzMzMzJAZmZmZmbmMEAAAAAAAAAvQDMzMzMzMzNAAAAAAACAMkBmZmZmZuY/QM3MzMzMDEFAmpmZmZnZQUBmZmZmZmY7QGZmZmZmZjlAAAAAAAAAN0AzMzMzMzM7QGZmZmZm5jdAmpmZmZkZQUAAAAAAAEBBQM3MzMzMzD9AZmZmZmamQkBmZmZmZmY8QM3MzMzMzDxAzczMzMzMOkAAAAAAAMBAQA==","dtype":"float64","shape":[29]}},"selected":{"id":"19678","type":"Selection"},"selection_policy":{"id":"19677","type":"UnionRenderers"}},"id":"19629","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"darkred"},"line_color":{"value":"darkred"},"x":{"value":72},"y":{"field":"y"}},"id":"19595","type":"Circle"},{"attributes":{},"id":"19673","type":"UnionRenderers"},{"attributes":{},"id":"19684","type":"Selection"},{"attributes":{"source":{"id":"19584","type":"ColumnDataSource"}},"id":"19588","type":"CDSView"},{"attributes":{},"id":"19682","type":"Selection"},{"attributes":{},"id":"19571","type":"SaveTool"},{"attributes":{"callback":null},"id":"19550","type":"DataRange1d"},{"attributes":{},"id":"19667","type":"UnionRenderers"},{"attributes":{"level":"underlay","size":10},"id":"19651","type":"TeeHead"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"orange"},"x":{"value":75},"y":{"field":"y"}},"id":"19610","type":"Circle"},{"attributes":{},"id":"19683","type":"UnionRenderers"},{"attributes":{"source":{"id":"19594","type":"ColumnDataSource"}},"id":"19598","type":"CDSView"},{"attributes":{},"id":"19662","type":"Selection"},{"attributes":{"data_source":{"id":"19609","type":"ColumnDataSource"},"glyph":{"id":"19610","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19611","type":"Circle"},"selection_glyph":null,"view":{"id":"19613","type":"CDSView"}},"id":"19612","type":"GlyphRenderer"},{"attributes":{},"id":"19556","type":"LinearScale"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"AAAAAADAREDNzMzMzAxDQM3MzMzMDEBAmpmZmZmZQkAAAAAAAAA8QGZmZmZmZjpAzczMzMxMOECamZmZmRkzQGZmZmZmJkFAzczMzMzMPUDNzMzMzEw/QAAAAAAAgEJAmpmZmZkZQEDNzMzMzExHQGZmZmZm5jtAZmZmZmZmREBmZmZmZiZGQDMzMzMzs0VAMzMzMzMzQkAAAAAAAAA+QM3MzMzMTEZAZmZmZmbmQEDNzMzMzMw9QJqZmZmZWUBAMzMzMzOzN0AAAAAAAIBBQDMzMzMzM0BA","dtype":"float64","shape":[27]}},"selected":{"id":"19680","type":"Selection"},"selection_policy":{"id":"19679","type":"UnionRenderers"}},"id":"19634","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":77},"y":{"field":"y"}},"id":"19621","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":71},"y":{"field":"y"}},"id":"19591","type":"Circle"},{"attributes":{},"id":"19658","type":"Selection"},{"attributes":{"level":"underlay","size":10},"id":"19650","type":"TeeHead"},{"attributes":{"source":{"id":"19644","type":"ColumnDataSource"}},"id":"19648","type":"CDSView"},{"attributes":{},"id":"19677","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":81},"y":{"field":"y"}},"id":"19641","type":"Circle"},{"attributes":{"source":{"id":"19614","type":"ColumnDataSource"}},"id":"19618","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"19656","type":"BoxAnnotation"},{"attributes":{},"id":"19660","type":"Selection"},{"attributes":{"below":[{"id":"19558","type":"LinearAxis"}],"center":[{"id":"19562","type":"Grid"},{"id":"19567","type":"Grid"},{"id":"19582","type":"Whisker"}],"left":[{"id":"19563","type":"LinearAxis"}],"plot_height":300,"renderers":[{"id":"19587","type":"GlyphRenderer"},{"id":"19592","type":"GlyphRenderer"},{"id":"19597","type":"GlyphRenderer"},{"id":"19602","type":"GlyphRenderer"},{"id":"19607","type":"GlyphRenderer"},{"id":"19612","type":"GlyphRenderer"},{"id":"19617","type":"GlyphRenderer"},{"id":"19622","type":"GlyphRenderer"},{"id":"19627","type":"GlyphRenderer"},{"id":"19632","type":"GlyphRenderer"},{"id":"19637","type":"GlyphRenderer"},{"id":"19642","type":"GlyphRenderer"},{"id":"19647","type":"GlyphRenderer"}],"title":{"id":"19548","type":"Title"},"toolbar":{"id":"19574","type":"Toolbar"},"x_range":{"id":"19550","type":"DataRange1d"},"x_scale":{"id":"19554","type":"LinearScale"},"y_range":{"id":"19552","type":"DataRange1d"},"y_scale":{"id":"19556","type":"LinearScale"}},"id":"19547","subtype":"Figure","type":"Plot"},{"attributes":{"fill_color":{"value":"olive"},"line_color":{"value":"olive"},"x":{"value":71},"y":{"field":"y"}},"id":"19590","type":"Circle"},{"attributes":{},"id":"19675","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"AAAAAAAAPEAAAAAAAAA5QAAAAAAAADlAAAAAAAAAOkAAAAAAAAA7QAAAAAAAgDFAAAAAAAAAMEAAAAAAAAAvQAAAAAAAAC1AAAAAAAAANkAAAAAAAAA2QAAAAAAAADhAAAAAAACANkAAAAAAAAA9QAAAAAAAgDhAAAAAAAAAPUAAAAAAAIBAQAAAAAAAADRAAAAAAAAAMkAAAAAAAIAyQAAAAAAAgDFAAAAAAACAPUAAAAAAAABAQAAAAAAAADxAAAAAAACAOkAAAAAAAAA0QAAAAAAAACpAAAAAAAAAM0AAAAAAAAAzQAAAAAAAgDBAAAAAAACAMEAAAAAAAAAqQAAAAAAAACpAAAAAAAAAKkA=","dtype":"float64","shape":[34]}},"selected":{"id":"19672","type":"Selection"},"selection_policy":{"id":"19671","type":"UnionRenderers"}},"id":"19614","type":"ColumnDataSource"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"AAAAAAAAKkAAAAAAAAAsQAAAAAAAACpAAAAAAAAALEAAAAAAAAAuQAAAAAAAAChAAAAAAAAAKkAAAAAAAAAqQAAAAAAAACxAAAAAAAAAKkAAAAAAAAAoQAAAAAAAACpAAAAAAAAAMkAAAAAAAAAwQAAAAAAAADJAAAAAAAAAMkAAAAAAAAA3QAAAAAAAADpAAAAAAAAAJkAAAAAAAAAoQAAAAAAAACpAAAAAAAAAKEAAAAAAAAAyQAAAAAAAADRAAAAAAAAANUAAAAAAAAA2QAAAAAAAADJAAAAAAAAAM0AAAAAAAAA1QAAAAAAAADpAAAAAAAAALkAAAAAAAAAwQAAAAAAAAD1AAAAAAAAAOEAAAAAAAAA0QAAAAAAAADNAAAAAAAAALkAAAAAAAAA4QAAAAAAAADRAAAAAAAAAJkA=","dtype":"float64","shape":[40]}},"selected":{"id":"19666","type":"Selection"},"selection_policy":{"id":"19665","type":"UnionRenderers"}},"id":"19599","type":"ColumnDataSource"},{"attributes":{},"id":"19653","type":"BasicTickFormatter"},{"attributes":{},"id":"19681","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"olive"},"line_color":{"value":"olive"},"x":{"value":78},"y":{"field":"y"}},"id":"19625","type":"Circle"},{"attributes":{"fill_color":{"value":"goldenrod"},"line_color":{"value":"goldenrod"},"x":{"value":80},"y":{"field":"y"}},"id":"19635","type":"Circle"},{"attributes":{"fill_color":{"value":"goldenrod"},"line_color":{"value":"goldenrod"},"x":{"value":73},"y":{"field":"y"}},"id":"19600","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":75},"y":{"field":"y"}},"id":"19611","type":"Circle"},{"attributes":{},"id":"19572","type":"ResetTool"},{"attributes":{"fill_color":{"value":"skyblue"},"line_color":{"value":"skyblue"},"x":{"value":81},"y":{"field":"y"}},"id":"19640","type":"Circle"},{"attributes":{},"id":"19679","type":"UnionRenderers"},{"attributes":{"source":{"id":"19629","type":"ColumnDataSource"}},"id":"19633","type":"CDSView"},{"attributes":{},"id":"19568","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":80},"y":{"field":"y"}},"id":"19636","type":"Circle"},{"attributes":{},"id":"19678","type":"Selection"},{"attributes":{"base":{"field":"base","units":"data"},"lower":{"field":"lower","units":"data"},"lower_head":{"id":"19651","type":"TeeHead"},"source":{"id":"19581","type":"ColumnDataSource"},"upper":{"field":"upper","units":"data"},"upper_head":{"id":"19650","type":"TeeHead"}},"id":"19582","type":"Whisker"},{"attributes":{"source":{"id":"19634","type":"ColumnDataSource"}},"id":"19638","type":"CDSView"},{"attributes":{"data_source":{"id":"19629","type":"ColumnDataSource"},"glyph":{"id":"19630","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19631","type":"Circle"},"selection_glyph":null,"view":{"id":"19633","type":"CDSView"}},"id":"19632","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":70},"y":{"field":"y"}},"id":"19586","type":"Circle"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"AAAAAAAAO0AAAAAAAAA8QAAAAAAAADlAAAAAAAAAM0AAAAAAAAAwQAAAAAAAADFAAAAAAAAAM0AAAAAAAAAyQAAAAAAAACxAAAAAAAAALEAAAAAAAAAsQAAAAAAAACxAAAAAAAAAKEAAAAAAAAAqQAAAAAAAACpAAAAAAAAAMkAAAAAAAAA2QAAAAAAAADNAAAAAAAAAMkAAAAAAAAA3QAAAAAAAADxAAAAAAAAAPkAAAAAAAAA+QAAAAAAAAD9AAAAAAACAQUAAAAAAAAA7QAAAAAAAADpA","dtype":"float64","shape":[27]}},"selected":{"id":"19662","type":"Selection"},"selection_policy":{"id":"19661","type":"UnionRenderers"}},"id":"19589","type":"ColumnDataSource"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"AAAAAAAAM0AAAAAAAAAyQAAAAAAAAC5AAAAAAAAALkAAAAAAAAAwQAAAAAAAAC5AAAAAAAAAMEAAAAAAAAAsQAAAAAAAADFAAAAAAAAAMEAAAAAAAAAuQAAAAAAAADJAAAAAAAAANUAAAAAAAAA0QAAAAAAAACpAAAAAAAAAPUAAAAAAAAA3QAAAAAAAADRAAAAAAAAAN0AAAAAAAAA4QAAAAAAAADlAAAAAAAAAOEAAAAAAAAAyQAAAAAAAAD1AAAAAAAAAM0AAAAAAAAA3QAAAAAAAADdAAAAAAAAANkAAAAAAAAA5QAAAAAAAgEBA","dtype":"float64","shape":[30]}},"selected":{"id":"19670","type":"Selection"},"selection_policy":{"id":"19669","type":"UnionRenderers"}},"id":"19609","type":"ColumnDataSource"},{"attributes":{},"id":"19680","type":"Selection"},{"attributes":{},"id":"19665","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"AAAAAAAAOEAAAAAAAAA5QAAAAAAAADdAAAAAAAAANEAAAAAAAAA1QAAAAAAAACpAAAAAAAAALEAAAAAAAAAuQAAAAAAAACxAAAAAAAAAMUAAAAAAAAAmQAAAAAAAACpAAAAAAAAAKEAAAAAAAAAqQAAAAAAAADNAAAAAAAAALkAAAAAAAAAqQAAAAAAAACpAAAAAAAAALEAAAAAAAAAyQAAAAAAAADZAAAAAAAAANUAAAAAAAAA6QAAAAAAAADZAAAAAAAAAPEAAAAAAAAA3QAAAAAAAADxAAAAAAAAAO0A=","dtype":"float64","shape":[28]}},"selected":{"id":"19664","type":"Selection"},"selection_policy":{"id":"19663","type":"UnionRenderers"}},"id":"19594","type":"ColumnDataSource"},{"attributes":{"source":{"id":"19609","type":"ColumnDataSource"}},"id":"19613","type":"CDSView"},{"attributes":{"overlay":{"id":"19656","type":"BoxAnnotation"}},"id":"19570","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"19653","type":"BasicTickFormatter"},"ticker":{"id":"19559","type":"BasicTicker"}},"id":"19558","type":"LinearAxis"},{"attributes":{"formatter":{"id":"19655","type":"BasicTickFormatter"},"ticker":{"id":"19564","type":"BasicTicker"}},"id":"19563","type":"LinearAxis"},{"attributes":{"source":{"id":"19604","type":"ColumnDataSource"}},"id":"19608","type":"CDSView"},{"attributes":{"source":{"id":"19589","type":"ColumnDataSource"}},"id":"19593","type":"CDSView"},{"attributes":{},"id":"19672","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":74},"y":{"field":"y"}},"id":"19606","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":78},"y":{"field":"y"}},"id":"19626","type":"Circle"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"MzMzMzMzO0CamZmZmZk6QM3MzMzMzDlAAAAAAACAN0AAAAAAAAA+QM3MzMzMjENAAAAAAACAQ0DNzMzMzIxBQGZmZmZmJkBAAAAAAACAQkCamZmZmdlCQM3MzMzMDEFAmpmZmZlZQUAzMzMzMzNBQGZmZmZm5j1AAAAAAACAQECamZmZmdlAQDMzMzMzM0BAMzMzMzNzQECamZmZmZk/QJqZmZmZGTxAMzMzMzOzPkBmZmZmZmY5QDMzMzMzMzhAZmZmZmZmNkCamZmZmZk6QDMzMzMzMzRAmpmZmZmZMUA=","dtype":"float64","shape":[28]}},"selected":{"id":"19682","type":"Selection"},"selection_policy":{"id":"19681","type":"UnionRenderers"}},"id":"19639","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"19614","type":"ColumnDataSource"},"glyph":{"id":"19615","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19616","type":"Circle"},"selection_glyph":null,"view":{"id":"19618","type":"CDSView"}},"id":"19617","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"19644","type":"ColumnDataSource"},"glyph":{"id":"19645","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19646","type":"Circle"},"selection_glyph":null,"view":{"id":"19648","type":"CDSView"}},"id":"19647","type":"GlyphRenderer"},{"attributes":{"text":"Years vs mpg with Quartile Ranges"},"id":"19548","type":"Title"},{"attributes":{},"id":"19559","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"19568","type":"PanTool"},{"id":"19569","type":"WheelZoomTool"},{"id":"19570","type":"BoxZoomTool"},{"id":"19571","type":"SaveTool"},{"id":"19572","type":"ResetTool"},{"id":"19573","type":"HelpTool"}]},"id":"19574","type":"Toolbar"},{"attributes":{"source":{"id":"19599","type":"ColumnDataSource"}},"id":"19603","type":"CDSView"},{"attributes":{"data_source":{"id":"19604","type":"ColumnDataSource"},"glyph":{"id":"19605","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19606","type":"Circle"},"selection_glyph":null,"view":{"id":"19608","type":"CDSView"}},"id":"19607","type":"GlyphRenderer"},{"attributes":{},"id":"19564","type":"BasicTicker"},{"attributes":{},"id":"19655","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"19639","type":"ColumnDataSource"}},"id":"19643","type":"CDSView"},{"attributes":{},"id":"19670","type":"Selection"},{"attributes":{"data_source":{"id":"19599","type":"ColumnDataSource"},"glyph":{"id":"19600","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19601","type":"Circle"},"selection_glyph":null,"view":{"id":"19603","type":"CDSView"}},"id":"19602","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"19639","type":"ColumnDataSource"},"glyph":{"id":"19640","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19641","type":"Circle"},"selection_glyph":null,"view":{"id":"19643","type":"CDSView"}},"id":"19642","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"19619","type":"ColumnDataSource"},"glyph":{"id":"19620","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19621","type":"Circle"},"selection_glyph":null,"view":{"id":"19623","type":"CDSView"}},"id":"19622","type":"GlyphRenderer"},{"attributes":{},"id":"19657","type":"UnionRenderers"},{"attributes":{},"id":"19666","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":79},"y":{"field":"y"}},"id":"19631","type":"Circle"},{"attributes":{},"id":"19671","type":"UnionRenderers"},{"attributes":{},"id":"19569","type":"WheelZoomTool"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"AAAAAAAAPEAAAAAAAAA7QAAAAAAAAEFAAAAAAAAAP0AAAAAAAAA9QAAAAAAAADtAAAAAAAAAOEAAAAAAAABCQAAAAAAAgEJAAAAAAAAAP0AAAAAAAABDQAAAAAAAAEJAAAAAAAAAQkAAAAAAAABCQAAAAAAAAEFAAAAAAAAAQ0AAAAAAAABAQAAAAAAAAENAAAAAAAAAOUAAAAAAAABDQAAAAAAAADpAAAAAAAAANkAAAAAAAABAQAAAAAAAAEJAAAAAAAAAO0AAAAAAAAA7QAAAAAAAAEZAAAAAAAAAQEAAAAAAAAA8QAAAAAAAAD9A","dtype":"float64","shape":[30]}},"selected":{"id":"19684","type":"Selection"},"selection_policy":{"id":"19683","type":"UnionRenderers"}},"id":"19644","type":"ColumnDataSource"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"AAAAAAAAMkAAAAAAAAAuQAAAAAAAADJAAAAAAAAAMEAAAAAAAAAxQAAAAAAAAC5AAAAAAAAALEAAAAAAAAAsQAAAAAAAACxAAAAAAAAALkAAAAAAAAAuQAAAAAAAACxAAAAAAAAALkAAAAAAAAAsQAAAAAAAADhAAAAAAAAANkAAAAAAAAAyQAAAAAAAADVAAAAAAAAAO0AAAAAAAAA6QAAAAAAAADlAAAAAAAAAOEAAAAAAAAA5QAAAAAAAADpAAAAAAAAANUAAAAAAAAAkQAAAAAAAACRAAAAAAAAAJkAAAAAAAAAiQA==","dtype":"float64","shape":[29]}},"selected":{"id":"19660","type":"Selection"},"selection_policy":{"id":"19659","type":"UnionRenderers"}},"id":"19584","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"darkred"},"line_color":{"value":"darkred"},"x":{"value":79},"y":{"field":"y"}},"id":"19630","type":"Circle"}],"root_ids":["19547"]},"title":"Bokeh Application","version":"1.3.0"}}';
                  var render_items = [{"docid":"629ae88e-dddd-4a1c-a4a5-e1b24401605e","roots":{"19547":"12a32513-cb3e-4ca0-8892-7d7997dd3ed7"}}];
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