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
      };var element = document.getElementById("a0550ab5-e938-42c3-a9a9-9ccf4fa7198c");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'a0550ab5-e938-42c3-a9a9-9ccf4fa7198c' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.2.min.js"];
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
                    
                  var docs_json = '{"cbb42100-20a5-401d-ba14-3bbdb1215616":{"roots":{"references":[{"attributes":{},"id":"3963","type":"BasicTicker"},{"attributes":{},"id":"3967","type":"WheelZoomTool"},{"attributes":{"background_fill_color":{"value":"#440154"},"below":[{"id":"3957","type":"LinearAxis"}],"center":[{"id":"3961","type":"Grid"},{"id":"3966","type":"Grid"}],"left":[{"id":"3962","type":"LinearAxis"}],"match_aspect":true,"renderers":[{"id":"3978","type":"GlyphRenderer"},{"id":"3983","type":"GlyphRenderer"}],"title":{"id":"3947","type":"Title"},"toolbar":{"id":"3969","type":"Toolbar"},"x_range":{"id":"3949","type":"DataRange1d"},"x_scale":{"id":"3953","type":"LinearScale"},"y_range":{"id":"3951","type":"DataRange1d"},"y_scale":{"id":"3955","type":"LinearScale"}},"id":"3946","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"3973","type":"ColumnDataSource"}},"id":"3979","type":"CDSView"},{"attributes":{},"id":"3988","type":"BasicTickFormatter"},{"attributes":{"callback":null,"point_policy":"follow_mouse","renderers":[{"id":"3978","type":"GlyphRenderer"}],"tooltips":[["count","@c"],["(q,r)","(@q, @r)"]]},"id":"3985","type":"HoverTool"},{"attributes":{"formatter":{"id":"3990","type":"BasicTickFormatter"},"ticker":{"id":"3963","type":"BasicTicker"}},"id":"3962","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"g7YT9JTB9T9Jn9XY1hwaQJir1GGROeG/QlUhFrFCB8CIIZz5kuwQQF5vszj0pvk/YrM13JMWAUDv8UACY5cQQADgVzkwi+8/Ujj86usnFEA8G86PfTDovwnrIOfZOfM/yhTGhte9AcB8JNVyKhnrv9JOqgjW/ARAHPcLBnlcFkD6aTF1JkwJQHxcpx7/8/y/sRyyamiCB0DYOF4WmlvVP+43RQQ1hPU/WSCUYwLXAUDeX32fVbrlP+C8LmjwDte/0lrzPn4aCEAivKrGWXrxP9vYFyh3mwBAOGxafpXJEUBwDCHQ5RHav2nNRtylG/0/eP9mSAT30j9/vem7W0URwHr3WWvVrfU/JPInq+W7CkDewjFbqhMMwKbvrMiTJBNAwJCK17AXwb/cRAZep3MVQDyQvLHoqhZAPPuvX30XCEDUjhYVnr0DQNMoN4jzYvg/I6PawLiNBEDUsNqiJrb4P9DLHjU25c6/+o1wa2y95D9Qei8ksqMNQCpjE2kDYvw/9BD90QX59T/jWjotlIYTQEB35MjqhbE/QiKJDgUI+z/2SoO0oOsJQPMStGqHth5A+PcnT/+Rwz8+qNE1/PoDQNtlFebUSghAFbdUENDuAUD/ZUDhlh/5P5Xw3v5v4w1AdL4xJr4d7D/808W3GeT/PymOxlafghRA2jePjXHB4D9ewVyrXkQRQHimCdZT7BVADph3IpqWD0Cq/KsQoEcLQAcKKkT6AAVAtghiednxCkCj+H1noH8QQKDgdQMOLgVAwOWAGzJrzT/gBztfK1u1vybxdUzoDPM/IGg0SizLEEDrJPAk5swIQPAKQFWQafo/QpShL/cn9r8qFuzQNFcIQD6bvtv9QRJANvhA5Fld4D/a2Wo08n3wP937sPUX+AFAUHarqM5FC0A42SEKRYTJP/oCac9q8O0/eKSCXahTwj88DGvokgHoPyJsfG6KOvA/AEplopPBx7/SiBgzXrsHQGV0KqDMCRNAgsEhdYVs6T/QdP6hh2P9P/xzqB6nafY/2mLWLwZR+j8JgykFYVcfQHnERXuuOAdACMY8p2BZA8A2jiCVCx4GQEqb49Yr5xFAxsjPldpmFECZWR2YtWQKQPCJnifoHea/DCBxRDv0/D+Yu+lFNwMJQEY+x45XxRNAQq/Vn4UrE0ClG/RcDLsGQJD1tTZU6/I/7CyxQTqB+z/9b0TM5EkDQOVkBHJsMABATkg4Sy0d+T+g3CX+sayxP3DqZjxTvAxAL1ZdRXs78T+QyAI3p60TQJz/uWeA/wpA/FW0YtdrCUD+CQo24R8DQEINMP5yeglA9saWO+/2D0DCVY1Zl73+P0EPCHpAmvQ/zNzrfvp8D0B22gqrFXcPQAWF3UGNCwpAtzd5vLm/AUAXxiSf9qjwPzqSHiATHwLAWPyqzmB58D8c7QaLtXz9vyy3RkDclvU/kKQlIsCG6L9wyKaGTEfgvyyDlEugVfW/WLJLjAYrEUBk+5ll5mQTQC4tKMcXo/E/IBcEUhSToT8MoTh3cQDtPzkSFiEPDhHAPgbuU6moBsAkUuy80DgDQHCdP4We9Os/bHu0IEKD/T/oCroaCi4QQAwCiPzutBlAfJLYvR2q9j9UIJjmGjXiP45pErKrRQZAL8h0kjd//T/7Xr1h6ecZQAbfdgzKS+A/bHgk89W78r9G+qoQBnQMQFiHhl7f8glAUid5vxgBAMB/NCmJ5KX7PyjNGdP29tW/osQizykjA0DxFgOu0ab4P3B9oZEe3xFAaw/8Nph6FUBafdEzoPX5v3tLQJyoBQdAL9tE45FSC0B5sqMfU2H3P3ifmGxkuu8/3PhzpvUGDEDowvmnRJr0P+Rjnelk7PM/qCa0hdg23D9fEtd+Ojn8PxBRRwiF+fk/0IZNAbZbBUCA/4HwV6UZQEgsVz0oVOC/U5e7lJawBUCjzu/e7Z0OQBJduRYMau4/5pfLouXPEEAsNcV2VjcJQKa2oU+ahwdA4UDuLvA9/z/+J5jiYmX+P/y6/OZVdg1AogpOLz/k8b+Urgma96AIQMP/roqaX/I/cLl0EjFxDECo2Ofpn7z6PwgNb4LoBdw/xKhZW2szDUBA9wziYxEIQMAB4zTTq7Y/JL2gkN4PEUCWeR9u1oAQQLmoe0yc7ARAeA/TqYjkAUC+mEdjv+74Pzj4uGzOL9O/s06VWs0ICkAIdv1HegPqP1oGnvbB6Pa/XMWDdB3W5b+AIOH06QwXQJLRr6HrBeM/uG8OO80P5r8mAcSDAiv7P0zhZsaBbQNAfrLqHgKpCUAMnFuRlc3dP+So4PCQndQ/dDqLeHNCBECym9K7qrbwP6JearqzQve/jBdBfcCDB0AEh0m0hHQDQOyqDeSK3wZA+mDqdVNHA0DDyjH/Rtz3P9yMMnFzsBFAhgWL8oY+9j8xLkPruLsPQOS9VXlEWOk/y4n1maVACUAMuX6l2QniP85IP1/rNfg/Fn8SzJAiCEB92J870/z0P+wo+iK+0vc/fcBxzLlNBUDkeaDJZSLmv8bXdmqw3APA95W0csr9A0AqA1NWAPQBQB79fNY9SOo/5lpczJcf97+LNqYzXBYGQIDvPeYlugJAgA2lkg36CkCqN4Q2qP79P/tzpeA08RRAEo7ZhIrs4T86SNBo6nQAQJn+wsXjbAJAdG1q35/bC0DmA6P013AAwBwGIKW7XgFAUGa/r87iuz8+4eBbqTf8P/PqWpCjJ/w/Eiei/933CUA0HhVReiIUQJz78om8DBRAwFIMkON//z/gfpug37/bP+UdAqmvsvw/ONECkilv6L99Thuj4kb/P8L6pNVU4/6/cAmIQUq6DUAQ2O+iCpQOQPQiEXbC0h5AbnemvuZgC0AAPBg3xwPLv5qUAklYhxBAMB8RzKNZwb8RzMGrTW8GQIrHCS2gexNAFvnIu0Tk8r9olg37w+jrv4qk5ZRJ1/E/IBXVHc/HBUCFAhUXzoH7P17Yvx70TxtAlTTqnUlR9D85Zff1ayAMQECpEMUWYLw/ywkYZ98NA0CoPZgXR2ATQLR2pWddCRBAyNvZh5rK07+UbB6B6v4JQGARFRsK/d4/OdherqvJFEAUCxJZVwAGQBAybg8BKcG/9N3EYZze5L/j/0JEg9z4P3lMLUWVYRJARP8y2ZuZCUCG+1XbkKf4P2Uf2QpnuQZAkEmRPCxFCUBOjuJxnjv2Py6Se2EPphlAMBUhK30jBUC9wNYEWRwEQPD4pyVAGNq/yP2lLQCu0T/kp7RH/UUUQIGaS9cyUf8/Avp5fwgo8r9hM/i2Kf4DQC72lr3J+Pa/yJwokHmnCcBAcBQxqI7Ev9KjjZQvHwPApPAazPQQ7D9y1MtXkWsIQKd8kh2j3AVAFpdyPVCeDkDgf8Bs88jwv7wcXZyf0QVALbf+BBIz+D+4USB0FV3iv6aEnaWYNBZA4gsS48v/AsBcVTPI/Snov5+EiINsxg9ALzH0r13REUDcO4TWSpgTQJgod7MbmwNAoOo/Lo9z/D8YgMomqcYDQPUE+F2SMBRAn8/wS+eSAEDYojlF9xXdvxQ/1tJ0CRJAkkZ8csyb+j/idcoSvPkHQOIA39tY7vo/zAQZ4XELEkAeD3GZqZD4P2iAy1hbqxtAeonaqwgdB0DAkwAtPZnpP1aSnWvSkQZALfTyeNqU/T+3AhQfjUcYQAXjMPOb6ABARGYdeL/FCcBBcY8wDr4FQM8+UYRZ2/o/qN3m0YDx87++qHO/nlr3P3bdShfK4wpA0eD1B/1/8z9grlpHNEfSPzyXthkNQPS/JKvbnh5z87/Gc+LREFL1PwqM0jS88QhAHhDiUyGfE0Ax4MHNw0X5P1zgsxL4N+2/Dw0L4qz/AkB2LkJXQtcJQGRinqWrxOm/ks7Haxvi4j9IKIQEazD3P5izdOSWIhFAhsCDlBtvE0Dg+zBl8ccEQEGpOUXsKBlA3X1Va6y3B0DQTJyjHC4AwLi6kqaXbNM/ihe2JHkaCUBckApa4gAQQDDq8STo/P4/jGe1Q3tpAkCUCYfT/AwXQCV8lKZnDfE/lisqfp4iEED8SDN1mNT8P4WFkmKGQwNAGAi+bdq1CkA80thlzqTmv0CmkZIBnay/KKXbEPSg67/AAF74ULalvxFQk/FknQNAgJZ83XrvgD/xMq0xfpUBQIVfpOuYww1A7BKYv0LrEUDw5u1/mTXiv3hKBl2NVwBApM5Tpw6Z+j/w82B9NwLjP0x7DsyzIARAYA8USsEf27+nfwOwvOEBQIxN2MCUuxdAEK+hjgX41j+uFgc9HGf7PyJuiiuPOwFAyggyMNI39L+sKghPWTLvP4Ql+A4fbwpAuDMePBUizT/lAgGRQ3z+P+9lE5OF1wBAwpFasKryA0BLY2KqCPUJQJUKMxAT7xBA8EV6a86u1r8AVjwghkaoPyjbSc19UPU/FqsphRRQE0CVpTEPstYBQFozT1tP5vY/dI09SUblCEAowEbx/5b4v1D/3w4IG8S/3ASGtzhmAEA0CwGoCdbjP+6D18nZ8ADAGBZXEZpVxz+6EaCXGH8TQKIBCAcP0AhAQGq96efu5r8YpcFmB6XWv/hS8jYQefA/3p0iIGhJBkDQAXCv7GLkvxq5jIAAhghAxKhEgrHs4j/AzVgsC5isPxOShJBVEARAyIU6yV7Z/z84zgki1gnyP6hSBHunutE/Dp6Fgt649T+MyYJNhcfqv0Dxv1yYgP0/0p3iSmJmBkCkPYXYcqDlP6bzo0fNNA9AgP22FwSrnz8S18k93Cz2v+cQv45vJw5AeJMacKbR1z+/SwYQ8xT9P8BIyvZzdsu/LAeSgib28j943GBwV9rKP90uC30t2PM/R6HpNoZyCUCsMCFrcEYMQOYxkRVS2hBAW4GbAiwjDEDY56YsZJvxP+a6cYg0Yg1A0gwx+d1HEkDYgBF3SjTMP7w4NtVLvtE/9vuc9/faEkBBG+e/dhf2P6mEmOMR7hhAsOdEUZZs9L+ocsLStG38PzqKaW+j9AxASJHsyc7kFEAco2+bboEQQFhPsPOeatw/4OClO5cM6b8my1IcWh4IQLur2wU5f/8/+MM5svFiAUAbNp2dMUoDQMFrKyTZ9ARAde4iBpW4GEDeWEUPqzLgP5ju9V5StQLAEPEANxJIBUB5yJ0sE5cNQCyhmtyzFd8/9Nlid2U3DECsFYGTncYTQFKhOpvFI/0/EzBacbym+j+VWFe4mNwAQFHLIMv7pvk/niuA5dcy8z+QiC1L2Zz5P5CXtnZSQs+/FDOL2ImLA0Ab12YYx+f9Pyx8Zd+9E+O/YJ4BeUHgv78LOyIsopb/P8Bfus/CE9a/r7tC6nA6AkDRhhPUETQXQA==","dtype":"float64","shape":[500]},"y":{"__ndarray__":"hqzQthl/D0DYf5wuPKUDQBqZ3wrs5QhA3hwhjmxv9D9jpKTOOiYFQJ6SUXQNaARAXjklKtFLDkCwnqfGnMC1PzB75vRvEwRAAhDo5GBi7T9y4KmYb6D6P6muHhXCGANAeClJlRnqCEAQk5Zpg+wEQM79/Z3bNwxA0P/oruo7DEAyZ+uJxDYCQMIJKbukSgdANFP1l9Kb8D9wMvy1YpXtv3hbG2qw+dO/FK1e0wYzBkBcjU/PBoMXQGAMA0XDiALAQE4tWP2vpT9qkVVXI0z2PzBWAs9zIxBAsAN04iRw6r8g+r7GSw21v7Kc8SyjtRVAxPE7Az0H8j/zaryqHFL5Pzpc3RLfMhNAIy/caAF8FECIFCjL/LAQQGDR8WdRaqw/4a4jXXkeCkDqbYRpdPYFQOgUZPmoz90/riEsjjvV4j+C8c0kp3j7v4JpAkVw4BpApqgsTArwBUA26VkpJaQSQEYLyvm8W/o/igDszLPZ+j/LVC965O8AQOibv5MQENc/gKvmh8AuHECuyJIiITsQQIyemyS24ua/4ijuB+2yC0A6JICbFRPpP2BX4MSCCvq/ypkWukGZ+D8AkoxGOVeVv3hl64OOURdAVLauasEKCkAA8vEcmDWAvzC9DI3JIfU/5pXAkr/zFUDi6+ojnW/9v5AbguqZPPm/AP/GP9oGDUBv0TrN9+MQQMwlaND8T+8/1KnLB+Df9r95qe8ds2AAQAKa5yRoWQ1AL3i9d1TV9T+6lxqPYu/uP0yIrKVDIuo/XJIe1t9O3j9Yh3iV4pbKP+bvDJO7cOM/l7YglWcQAkCw2pCCe+QRQHxTE/YTfey/TsVrBuMNGUBK+SCmF83rP+j2S3miafy/APOSAj7aDEDp17alafwDQKwy1QPZ5A9ARmJvi5XcCEAWHyUHA5sJQEmrYLd35QtAcHmsKModwD/G1klFjAoEQMCusL/ooO4/0KJ/TG+N0b/byWTvtv8DQPgaGCg8Zg3AOgGEaX0NEkD46RBgguzSP5/uurpEKQJAR7CssvoQEUBH2rn/CcbxP+DKTFDPyQZAwoGM3+KcFkB+Cc2+8R3yv2jxUtUUow1AHp/iw9n1FkAcMVWiKZcSQEZ0UUELIBJAHkYk/KyTEkDMAsg1a6P7Pz72AoBlk/Y/VOKpBOZG/D9AqCtIMKkGQFJoOT0biglAgEeSo5ExGUCII+y5XwfZP55waJCKuBBAmGCqYgto6z84E04odY/Tv5hJ6jCuAgNA5rrKFdZP5T8Cu5wicLftP+4BRxKhe/6/qGkM3nvKC0Aqjm13ADgFQGqcqRbjqfI/obs833WvDUDO2z35sp0SQOw5v2WPHA9A/LDjPcfM3T8+Stu121PuP84dztNJWg5AVHV1ly5h9r/E1bvKVTjeP6K0A618rfw/q9BJ/tFK/T9+L2XaE5v7P66EAB3C4/W/MODKpumtuj/HqzkNk+r1P/CZT9E1PQFACItov52WFUBOZ8laBCoOQHheg8sKyApAtR0aSTFVF8BOv+ZLKgvtP0yvD1DzlOm/Vst0c7WOBEBIT3VFoFj7vwACCJtFJ/k/RadHPuaOBkAjTaQtId/9PyLqkmUnWgVAFfGVtV9cAUB6QqsLHIMFQKJI8TC5U+4/ul6HfhKwFUBah1kYLjXrPyYgD7s0zQpAIEK8LP53DUCUbiSxPHkAQMBgJJ0y4dw/yDQnxtw+3j+Ji1SVOckBQJCCxVddBBBAz50maBphEED9XqAOTqwaQCq/zS6XlQRAo3WCqbU+/j88aaFQTVkUQOuwqI7+SwVAcMH/pW1D3L/HOurgVtwfQDjdEBbNIda/uz9sTBAzAEABkQfkZx0DQG7vifcWr+0/wMM3gz3Ttj+SsS2zT/r0P/7JzmW5sBBAnQ8c8NPm/z8oMhcHSh74P+3+7DtOjAFA71/UV/bMBkCp21icpQwSQE5RRVsoeQRA5mjT3y004D9U/CzzFm0SQJSA3kO29hhA2D43KHckGUAqpj4WpRUGQB4hyF34cBJAJ4vqxuPeAEBa7jDcdOgQQEacJadRiQRAdPj41Kqn6L9qZ2LZAmASQBIcKaLjjPe/qjbU4Xu3AcAkKVeRJ2ToP/oq298Tufg/WQGe6Vx6DUD+mGhFckrsP0zpZs0fbAXAD9KhJfTHA0D+ACj8lnT7P7rG5DkAM/w/S+yCZq2k/z8ALhoIF1q9v5yKa/2JzQZAjOTLRBlY+b9gQBMDdgS0P3wq2S9OHeQ/zKzDuvVR9T/C/rgxzSgGQLoAkxCF3gBAziUl46RI7D9e9CebcvUGQDIN7dWXwwxAxDzelEP0DUCY1qtJeAPyPxhcVNz41ey/xH7Jr9AQ3z/xWiAY6a/1PxxPm5dcGPg/aiy3wwQ3FUDSGcC8ZaYUQChYSr0VIAZA/PssxxQfE0BWyIVXVfMPQEBoYxo2WvA/eFsCCaOJ+j8xjvIPb8AMQDiiMFXCZw5A68Itc69LGkA+UdjlVfwMQEjvEdydevC/MOyMjUecFEBZIRQ8hiwFQDbU3ny0XhRAgptP3MldBECc9vFu2bUUQHLyU+p46fM/5sySjs2vAkCw33EkHW0QQAiT1djbh+a/qrgyer3HGEB9vfKvIbP4P/iMSxd6Pfs/bMgGCGDr8D+AtHmMgPK5v0E1WcirUwFA2vO3KWwcEEDmOWA6zXzhPxTU3Nnohfc/2I0jrvU4279nIuB9BvwQQDBgcTPexcm/5j7mzt8x9T8Q2DLW0p/mP++asplaChBAqPsonK6dBMBa4dfY0nQIQMKq/cxB5fa/YMq0KRk0FECWmTF2fLYPQC69NqWPLQVAQHlwlkoDBEDWdqjbj8oEQBByUJsZR9Q/HhDohU5mDEC0A/KNdKoaQOxcVwg7NRBAtEJhra0mAUDcI53gVmsWQBIoQm5/4/Y/UEbXf1YbBsBsy6f6UOQMQOx4EfTSZgdATubbia6ZCEAC9x01Bw7xP0LptwI6VghABi1f+3CmEUB7I3tORroRQOr6lLvsegVAKky+suL0C0CaLAY6uxIKQFtvv7QTAgZA2Sjchzw1AEA6Cf2W/VcNQLGodGPcthVATw6X9r3r8T/tDz9TVqkBQISPoHJ3i/w/TIwiIC67EEAeBoophWAMQKWK4kntq/M/LJoLhGHb6z9Ov4GLeE3uP2CSqTfx7RFAOiWQx0OqGkDA9NuMztYMQHws2cVYcAJAetRPIy7KA0Dl6RbqyeUIQJhbAl2svhFAKnGbs2SACEDGNIA1jUURQPw3umSQAxZAeiDnlMdjB0CPumm+XK4NQGjHn2zUiBNAE2P/D6v4AkCYIlyplVwOQBelNH2yqP0/7a+ZbRAYA0A2cymGgZ3vPzZUGMTcWAJABTzG34me/D/wKJvn2i7hv4ANbYpXZ72/4PCnI+oHDEBOOVYcB5YGQJorzeXqYw1AcnQfMy+3BkDaArb9kZ0MQODABEgucri/SL8iZxXpzz+BKIlGcRUNQAMMfG4VMwZA1LBIv+DJEEC6LOcMkBzrP0gEN+FK2xBAaDZLyXED9T/ufRr3ofgLQIrRO3fR5Pk/AgEVK9x7DEBcnprEEyMBQOZzoZyexPA/vP1ASHlmEkBxHQS2NSoFQGAkmXPT3M2/MMe66lbJCkDyE1HFGITyvyjzHak7AwlAI8/p8+ZdB0D/xJVXJF0TQJCxqJsTKN+/YCy/XLVjG0DNWr/r5K75P4TbcpQwmf6/XvGcKGss6D+gxDKuqWsEQFwV9qoncfc/eSyfsHSsB0CsFVKXh+nvv8oFci4QXAlACqOfeAYj9z9IO2OIpzIOQP0FPWtOLRlANv63EvbD+z8g8rPyoVIDQKgTYmo0H/a/N6jHdSElCkAHjCtFDtUKQHez7nAwDQpAj0/2cOKaA0Cw+Krw+bfEP4zjTfr6luk/uzmRE226FkBw478oBYPRP67KfDkjPxBAFARA3CId9D/AGaoJAoTkv6j8FUEBFt0/4u35U0jSA0DwJCNhyqrfP9R9FHgDPwhAIsHIf9rUDkAPTFwBehUXQEDVfio3bvw/5L8C+QMJ3z/iozwPgNPuP0aTTgrK8uY/pu4apbe0EUDC5Y+0DTf5Pwi600/3Dde/CMUzm75cCECAXEvF4xfwvwYKfSxw2QNA8HHiflQd8D8wP3ldyuDvP7xEgZs0chJAyAX/WQqfEUBYj60bQw3vv5Cel4L9W+4/fBXj4Yh05r+OqotblOkOQKyb/UxLRhJAeMa8QNhw7j+61mW1FdwHQD96qBpQUQRAlGzgHxsmEEDKgT/NK1rwP/RkXjwGMgpAy2l1BxlUBEB4VQy8y5LjP510bMcsmwFALFTTxdcxFEDgde9Vt/Tav7DtJYd2MAJA2rfXJfEgEEDMyLCvoN0KQISSYyiAy9s/qAUqE1n30T+QJRiPWjAKQDKViM2fg/4/kNdotisf7r8Hoa3i5VAAQK4Ug/X7fQlA9kr+pyetEMA35Ypo+SIPQCbDaG8YcOg/QLLbWp8S2T9Uwc2wB1DVP1zqgtGawhFAqtknzedsEUDBQ2SlGCgcQLQ//XLDneS/jU/CvWnIEkCvbNyONgsSQB5LnVR3PvW/yGByfGy51j/w1m8F2v/bP2U5+e9t3gtAmD7wEp06DkAO4s0/Ut/vP8r5rHwFRBVA4vUe/0oO8r+B2jd3DDsOQGwZwEZ4r94/4NY2L+f7B0BOTgpgvoMPQKx/2r7xlPE/GA1BMq4d2r/KzfNnoSv0P7jZd5WDlghAmO7zfi+kFUB0mBrcXyATQJj2x79j9wxAts5pi8T0AkC7ZUpBAW35P6V3eT0dJQVA1JlpHGjQBUCq2/qHEvH0P6jG56H9FBJA7IJGtJbx0T84hjTU3Yz3P8lKjn4x5BFAtnifTgkwD0A8ReeCkv/kP2h+t6MqzhBAmVP0eu6C+D9sAZVfO3AMQLBXiuEXL9k/hHke+pJBG0DV8DU0IKAOQDAfKSWs9gHAOjDO5h01BkCxzzcESQz7P5rEKif24fg/vHQvWtwVAkDRiqrsxEkNQMp4b5imBfI/yHfxVjZkwz8FhLwHVQQLQH6HCWxADATAPv0alu2gBkBwSWXGHu3yP1zkAMovahVAu8wG3O8cC0AU0reGjZ76P9xEXEDuphBAqR00/14qAEANwDagGDv9P7/T1HqA1RRA6GUbpyChAUBAQNb0njCVPyKZV9yYGxVAxmvzwT6+BUAZbsCukK3zP/B7QKyHSdi/9HWM4DRK/7/aRdpFKpT+PwnSFbubDQRAJuQ2gykKB0CC1sWraF7xPwYCRptpvRdAWHfL7RZI1D/gd6mKS9D+v8H1tr8mgxNA3ugTDZDACkAmrMtRWZD7Pw==","dtype":"float64","shape":[500]}},"selected":{"id":"3995","type":"Selection"},"selection_policy":{"id":"3994","type":"UnionRenderers"}},"id":"3980","type":"ColumnDataSource"},{"attributes":{"source":{"id":"3980","type":"ColumnDataSource"}},"id":"3984","type":"CDSView"},{"attributes":{},"id":"3955","type":"LinearScale"},{"attributes":{},"id":"3992","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"3980","type":"ColumnDataSource"},"glyph":{"id":"3981","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3982","type":"Circle"},"selection_glyph":null,"view":{"id":"3984","type":"CDSView"}},"id":"3983","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"3967","type":"WheelZoomTool"},{"id":"3968","type":"ResetTool"},{"id":"3985","type":"HoverTool"}]},"id":"3969","type":"Toolbar"},{"attributes":{"fill_color":{"field":"c","transform":{"id":"3972","type":"LinearColorMapper"}},"q":{"field":"q"},"r":{"field":"r"},"size":0.5},"id":"3975","type":"HexTile"},{"attributes":{},"id":"3990","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"3951","type":"DataRange1d"},{"attributes":{"high":16,"low":0,"palette":["#440154","#440255","#440357","#450558","#45065A","#45085B","#46095C","#460B5E","#460C5F","#460E61","#470F62","#471163","#471265","#471466","#471567","#471669","#47186A","#48196B","#481A6C","#481C6E","#481D6F","#481E70","#482071","#482172","#482273","#482374","#472575","#472676","#472777","#472878","#472A79","#472B7A","#472C7B","#462D7C","#462F7C","#46307D","#46317E","#45327F","#45347F","#453580","#453681","#443781","#443982","#433A83","#433B83","#433C84","#423D84","#423E85","#424085","#414186","#414286","#404387","#404487","#3F4587","#3F4788","#3E4888","#3E4989","#3D4A89","#3D4B89","#3D4C89","#3C4D8A","#3C4E8A","#3B508A","#3B518A","#3A528B","#3A538B","#39548B","#39558B","#38568B","#38578C","#37588C","#37598C","#365A8C","#365B8C","#355C8C","#355D8C","#345E8D","#345F8D","#33608D","#33618D","#32628D","#32638D","#31648D","#31658D","#31668D","#30678D","#30688D","#2F698D","#2F6A8D","#2E6B8E","#2E6C8E","#2E6D8E","#2D6E8E","#2D6F8E","#2C708E","#2C718E","#2C728E","#2B738E","#2B748E","#2A758E","#2A768E","#2A778E","#29788E","#29798E","#287A8E","#287A8E","#287B8E","#277C8E","#277D8E","#277E8E","#267F8E","#26808E","#26818E","#25828E","#25838D","#24848D","#24858D","#24868D","#23878D","#23888D","#23898D","#22898D","#228A8D","#228B8D","#218C8D","#218D8C","#218E8C","#208F8C","#20908C","#20918C","#1F928C","#1F938B","#1F948B","#1F958B","#1F968B","#1E978A","#1E988A","#1E998A","#1E998A","#1E9A89","#1E9B89","#1E9C89","#1E9D88","#1E9E88","#1E9F88","#1EA087","#1FA187","#1FA286","#1FA386","#20A485","#20A585","#21A685","#21A784","#22A784","#23A883","#23A982","#24AA82","#25AB81","#26AC81","#27AD80","#28AE7F","#29AF7F","#2AB07E","#2BB17D","#2CB17D","#2EB27C","#2FB37B","#30B47A","#32B57A","#33B679","#35B778","#36B877","#38B976","#39B976","#3BBA75","#3DBB74","#3EBC73","#40BD72","#42BE71","#44BE70","#45BF6F","#47C06E","#49C16D","#4BC26C","#4DC26B","#4FC369","#51C468","#53C567","#55C666","#57C665","#59C764","#5BC862","#5EC961","#60C960","#62CA5F","#64CB5D","#67CC5C","#69CC5B","#6BCD59","#6DCE58","#70CE56","#72CF55","#74D054","#77D052","#79D151","#7CD24F","#7ED24E","#81D34C","#83D34B","#86D449","#88D547","#8BD546","#8DD644","#90D643","#92D741","#95D73F","#97D83E","#9AD83C","#9DD93A","#9FD938","#A2DA37","#A5DA35","#A7DB33","#AADB32","#ADDC30","#AFDC2E","#B2DD2C","#B5DD2B","#B7DD29","#BADE27","#BDDE26","#BFDF24","#C2DF22","#C5DF21","#C7E01F","#CAE01E","#CDE01D","#CFE11C","#D2E11B","#D4E11A","#D7E219","#DAE218","#DCE218","#DFE318","#E1E318","#E4E318","#E7E419","#E9E419","#ECE41A","#EEE51B","#F1E51C","#F3E51E","#F6E61F","#F8E621","#FAE622","#FDE724"]},"id":"3972","type":"LinearColorMapper"},{"attributes":{"text":"Hexbin for 500 points"},"id":"3947","type":"Title"},{"attributes":{"fill_alpha":{"value":0.8},"fill_color":{"value":"pink"},"line_alpha":{"value":0.8},"line_color":{"value":"pink"},"q":{"field":"q"},"r":{"field":"r"},"size":0.5},"id":"3977","type":"HexTile"},{"attributes":{"data_source":{"id":"3973","type":"ColumnDataSource"},"glyph":{"id":"3975","type":"HexTile"},"hover_glyph":{"id":"3977","type":"HexTile"},"muted_glyph":null,"nonselection_glyph":{"id":"3976","type":"HexTile"},"selection_glyph":null,"view":{"id":"3979","type":"CDSView"}},"id":"3978","type":"GlyphRenderer"},{"attributes":{},"id":"3993","type":"Selection"},{"attributes":{},"id":"3953","type":"LinearScale"},{"attributes":{},"id":"3994","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"3988","type":"BasicTickFormatter"},"ticker":{"id":"3958","type":"BasicTicker"}},"id":"3957","type":"LinearAxis"},{"attributes":{"ticker":{"id":"3958","type":"BasicTicker"},"visible":false},"id":"3961","type":"Grid"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"white"},"size":{"units":"screen","value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"3981","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"q":{"field":"q"},"r":{"field":"r"},"size":0.5},"id":"3976","type":"HexTile"},{"attributes":{},"id":"3958","type":"BasicTicker"},{"attributes":{"callback":null,"data":{"c":[1,1,1,1,1,2,3,2,2,2,1,1,2,1,1,2,2,1,3,4,5,3,9,3,3,1,1,1,1,2,3,9,4,7,10,4,4,4,3,1,1,1,2,3,5,6,3,9,10,7,4,4,1,2,3,9,9,13,13,6,6,2,1,1,1,1,4,3,12,10,7,6,12,2,1,2,1,3,10,12,16,12,11,8,4,2,1,3,2,7,3,9,3,9,3,3,2,1,1,1,4,11,7,4,2,6,2,1,2,3,1,4,5,2,2,2,1,1,1,1,2,2,1,3,1,2,1,1,1,1,1,1],"q":[-5,-4,-4,-3,-3,-2,-2,-2,-2,-2,-2,-1,-1,-1,-1,-1,-1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,10,10,10,10,10,10,11],"r":[1,-2,8,1,4,-3,-2,-1,1,2,3,-6,-4,-2,-1,0,1,-6,-4,-3,-2,-1,0,1,2,3,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,5,-9,-7,-6,-5,-4,-3,-2,-1,0,1,2,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,3,-11,-8,-7,-6,-5,-4,-3,-2,-1,0,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,2,-7,-6,-5,-4,-3,0,-9,-8,-6,-5,-4,-2,-8]},"selected":{"id":"3993","type":"Selection"},"selection_policy":{"id":"3992","type":"UnionRenderers"}},"id":"3973","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"3982","type":"Circle"},{"attributes":{"callback":null},"id":"3949","type":"DataRange1d"},{"attributes":{},"id":"3995","type":"Selection"},{"attributes":{"dimension":1,"ticker":{"id":"3963","type":"BasicTicker"},"visible":false},"id":"3966","type":"Grid"},{"attributes":{},"id":"3968","type":"ResetTool"}],"root_ids":["3946"]},"title":"Bokeh Application","version":"1.3.2"}}';
                  var render_items = [{"docid":"cbb42100-20a5-401d-ba14-3bbdb1215616","roots":{"3946":"a0550ab5-e938-42c3-a9a9-9ccf4fa7198c"}}];
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